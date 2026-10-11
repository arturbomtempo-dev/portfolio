import type { MissionDefinition } from '~/types/blackbox';

const TAMPERED_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhhbC0yMDI2LTAxIn0.eyJzdWIiOiJndWVzdC03NzgxIiwicm9sZSI6ImFkbWluIiwianRpIjoiN2YzYzkxIiwiaXNzIjoiaGFsY3lvbi1hdXRoIiwiaWF0IjoxNzczNDU5NTI0LCJleHAiOjE3NzM0NjMxMjR9.4UlWSGiZITfpxpvIC9w0csXGmkkzHR3abggfobZwieA';

const ACCESS_LOG = `2026-03-14T03:31:09Z req=r-0a91f2 GET  /v1/invoices         user=acct-2201  role=billing status=200 latency=84ms
2026-03-14T03:33:47Z req=r-17c3e8 GET  /v1/customers/5512   user=acct-2201  role=billing status=200 latency=61ms
2026-03-14T03:36:02Z req=r-2b8d40 POST /v1/invoices/export  user=acct-0007  role=admin   status=200 latency=932ms rows=212
2026-03-14T03:39:15Z req=r-3e6a17 GET  /v1/invoices         user=guest-7781 role=viewer  status=200 latency=77ms jti=7f3c91
2026-03-14T03:40:51Z req=r-4d27b8 POST /v1/invoices/export  user=guest-7781 role=viewer  status=403 latency=12ms jti=7f3c91
2026-03-14T03:41:30Z req=r-4f0c55 GET  /v1/invoices?page=2  user=guest-7781 role=viewer  status=200 latency=69ms jti=7f3c91
2026-03-14T03:42:17Z req=r-5c19e2 POST /v1/invoices/export  user=guest-7781 role=admin   status=200 latency=4210ms rows=18342 jti=7f3c91
2026-03-14T03:44:03Z req=r-61d2aa GET  /v1/exports/latest   user=guest-7781 role=admin   status=200 latency=55ms jti=7f3c91
2026-03-14T03:47:38Z req=r-7a3f19 GET  /v1/invoices         user=acct-3390  role=billing status=200 latency=90ms
2026-03-14T04:06:02Z req=r-8e2c01 POST /v1/invoices/export  user=acct-0007  role=admin   status=503 latency=3ms reason=feature_flag_disabled`;

const ISSUED_LOG = `2026-03-14T03:12:05Z issued  jti=6a01bc sub=acct-2201  role=billing kid=hal-2026-01 sig=Jf2cQ0nV7yLkE1pRtW8zXa3sDb6uHm9oGi4eNc5fYqU
2026-03-14T03:35:51Z issued  jti=70d4e2 sub=acct-0007  role=admin   kid=hal-2026-01 sig=Qm9Tz2Lr6XcV1bNs8Kd3YhWp7Ue4Jg5Fo0Ai9MtCqRw
2026-03-14T03:38:44Z issued  jti=7f3c91 sub=guest-7781 role=viewer  kid=hal-2026-01 sig=4UlWSGiZITfpxpvIC9w0csXGmkkzHR3abggfobZwieA
2026-03-14T03:46:12Z issued  jti=82b7d0 sub=acct-3390  role=billing kid=hal-2026-01 sig=Rk7Pw2Yn5Tb8Lq1Zc6Hv3Xm9Df4Gs0Ja7Ue2Ni5OyQ
2026-03-14T03:58:40Z revoked jti=7f3c91 reason=incident-response`;

const DEPLOYMENT_LOG = `2026-03-14T02:58:31Z pipeline #4182 started  service=gateway ref=release/3.8.0 commit=9c1e4fa
2026-03-14T03:01:44Z build ok              image=gateway:3.8.0 digest=sha256:5f1d0c7e
2026-03-14T03:03:20Z tests passed          suites=214 duration=96s
2026-03-14T03:04:58Z env resolved          GATEWAY_PROFILE=debug source=release-3.8.0-staging.env
2026-03-14T03:05:12Z rollout complete      service=gateway version=3.8.0 replicas=6/6
2026-03-14T03:05:13Z gateway boot          profile=debug config=/services/gateway/config.yaml
2026-03-14T03:05:13Z gateway notice        2 auth settings differ from the previous release
2026-03-14T03:05:14Z healthcheck ok        endpoint=/healthz status=200`;

const ACTIVE_GATEWAY_CONFIG = `# gateway configuration, profile: debug
service: gateway
version: 3.8.0
profile: debug
auth:
  jwt:
    algorithm: HS256
    issuer: halcyon-auth
    key_id: hal-2026-01
    verify_signature: false
  authorization:
    role_source: token_claims
logging:
  level: debug
  redact_tokens: true
routes:
  - path: /v1/invoices/export
    methods: [POST]
    required_role: admin`;

const PREVIOUS_GATEWAY_CONFIG = `# gateway configuration, profile: production
service: gateway
version: 3.7.2
profile: production
auth:
  jwt:
    algorithm: HS256
    issuer: halcyon-auth
    key_id: hal-2026-01
    verify_signature: true
  authorization:
    role_source: user_directory
logging:
  level: info
  redact_tokens: true
routes:
  - path: /v1/invoices/export
    methods: [POST]
    required_role: admin`;

const INCIDENT_TIMELINE = `03:51:08Z ALERT    billing-export volume anomaly (18342 rows, threshold 5000)
03:53:40Z PAGE     on-call acknowledged (r.alves)
03:58:40Z ACTION   token jti=7f3c91 revoked at auth-service
04:06:00Z ACTION   export endpoint disabled via feature flag
04:12:31Z NOTE     export file quarantined before any download
04:20:00Z DECLARE  INC-2417 severity=SEV-2
--:--:--  OPEN     which request generated the export?
--:--:--  OPEN     when did the gateway start accepting it?
--:--:--  OPEN     was the token legitimate?`;

const SHELL_HISTORY = `ls -a
cat /incident/report.txt
grep -i export /services/gateway/access.log
jwt decode /incident/evidence/token.jwt
jwt verify /incident/evidence/token.jwt
find / -name "*.yaml"`;

export const BLACKBOX_MISSION: MissionDefinition = {
    id: 'ghost-admin',
    incidentId: 'INC-2417',
    hostname: 'halcyon',
    username: 'investigator',
    homeDirectory: '/home/investigator',
    directories: [
        '/home',
        '/home/investigator',
        '/incident',
        '/incident/evidence',
        '/services',
        '/services/gateway',
        '/services/auth',
        '/deploy',
        '/archive',
    ],
    files: [
        { path: '/home/investigator/README.txt', content: '', evidence: 'brief' },
        { path: '/home/investigator/notes.txt', content: '', evidence: 'notes' },
        {
            path: '/home/investigator/.bash_history',
            content: SHELL_HISTORY,
            evidence: 'history',
            isHidden: true,
        },
        { path: '/incident/report.txt', content: '', evidence: 'report' },
        { path: '/incident/timeline.log', content: INCIDENT_TIMELINE, evidence: 'timeline' },
        { path: '/incident/evidence/token.jwt', content: TAMPERED_TOKEN },
        { path: '/services/gateway/access.log', content: ACCESS_LOG, evidence: 'accessLog' },
        {
            path: '/services/gateway/config.yaml',
            content: ACTIVE_GATEWAY_CONFIG,
            evidence: 'gatewayConfig',
        },
        { path: '/services/auth/issued.log', content: ISSUED_LOG, evidence: 'issuedLog' },
        { path: '/deploy/deployment.log', content: DEPLOYMENT_LOG, evidence: 'deploymentLog' },
        {
            path: '/archive/gateway-config-v3.7.2.yaml',
            content: PREVIOUS_GATEWAY_CONFIG,
            evidence: 'previousConfig',
        },
    ],
    challenges: [
        {
            id: 'recon',
            dependencies: [],
            requiredEvidence: ['report'],
            answer: { kind: 'auto' },
            difficulty: 1,
        },
        {
            id: 'requestTrace',
            dependencies: ['recon'],
            requiredEvidence: ['accessLog'],
            answer: { kind: 'exact', accepted: ['r-5c19e2', '5c19e2', 'req=r-5c19e2'] },
            difficulty: 2,
        },
        {
            id: 'deployWindow',
            dependencies: ['recon'],
            requiredEvidence: ['deploymentLog'],
            answer: {
                kind: 'exact',
                accepted: ['03:05', '03:05:12', '03:05z', '03:05:12z', '3.8.0', 'v3.8.0', '#4182'],
            },
            difficulty: 2,
        },
        {
            id: 'tokenForgery',
            dependencies: ['requestTrace'],
            requiredEvidence: ['tokenDecoded', 'tokenVerified', 'issuedLog'],
            answer: { kind: 'concepts', required: ['roleClaim'], bonus: [] },
            difficulty: 3,
        },
        {
            id: 'rootCause',
            dependencies: ['deployWindow', 'tokenForgery'],
            requiredEvidence: ['gatewayConfig'],
            answer: {
                kind: 'concepts',
                required: ['signatureCheck', 'debugProfile'],
                bonus: ['claimAuthorization'],
            },
            difficulty: 3,
        },
    ],
    concepts: [
        { id: 'roleClaim', keywords: ['role', 'papel', 'rol', 'admin'] },
        {
            id: 'signatureCheck',
            keywords: [
                'assinatura',
                'assinaturas',
                'signature',
                'signatures',
                'firma',
                'firmas',
                'verify_signature',
                'hmac',
                'hs256',
            ],
        },
        {
            id: 'debugProfile',
            keywords: [
                'debug',
                'perfil',
                'profile',
                'gateway_profile',
                'staging',
                'config',
                'configuracao',
                'configuration',
                'configuracion',
            ],
        },
        {
            id: 'claimAuthorization',
            keywords: [
                'role_source',
                'token_claims',
                'user_directory',
                'autorizacao',
                'authorization',
                'autorizacion',
                'claim',
                'claims',
            ],
        },
    ],
    grepEvidence: [
        { path: '/services/gateway/access.log', evidence: 'accessLog', requiredMatch: 'r-5c19e2' },
        { path: '/services/auth/issued.log', evidence: 'issuedLog', requiredMatch: 'jti=7f3c91' },
        {
            path: '/deploy/deployment.log',
            evidence: 'deploymentLog',
            requiredMatch: 'profile=debug',
        },
        {
            path: '/services/gateway/config.yaml',
            evidence: 'gatewayConfig',
            requiredMatch: 'verify_signature',
        },
    ],
    jwt: {
        path: '/incident/evidence/token.jwt',
        evidenceOnDecode: 'tokenDecoded',
        evidenceOnVerify: 'tokenVerified',
        signingKey: 'halcyon-sandbox-signing-key',
        keyId: 'hal-2026-01',
    },
};
