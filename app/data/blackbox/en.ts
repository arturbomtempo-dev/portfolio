import type { MissionCopy } from '~/types/blackbox';

export const BLACKBOX_COPY_EN: MissionCopy = {
    title: 'BLACKBOX',
    subtitle: 'A system investigation',
    bootLines: [
        [
            { text: 'blackbox', tone: 'success', isBold: true },
            { text: ' v1.0 · incident response sandbox', tone: 'muted' },
        ],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'mounting evidence volume (read-only)' }],
        [
            { text: '[ ok ] ', tone: 'success' },
            { text: 'restoring snapshot halcyon-prod@2026-03-14T04:20Z' },
        ],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'anonymizing customer data' }],
        [{ text: '[warn] ', tone: 'warning' }, { text: 'gateway audit trail incomplete' }],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'investigation session ready' }],
    ],
    introLines: [
        [{ text: 'INCIDENT INC-2417 · Halcyon Billing', tone: 'accent', isBold: true }],
        [],
        [
            {
                text: 'At 03:51 UTC, an account with read-only permission exported 18,342 invoices. Exporting requires administrator permission.',
            },
        ],
        [],
        [{ text: 'The leak was contained. The question remains open:' }],
        [{ text: 'how did a visitor become an administrator?', tone: 'warning', isBold: true }],
        [],
        [
            {
                text: 'You have access to the logs, configurations and records from the night of the incident.',
                tone: 'muted',
            },
        ],
        [
            { text: 'Type ', tone: 'muted' },
            { text: 'help', tone: 'command' },
            { text: ' to see the commands or read ', tone: 'muted' },
            { text: 'README.txt', tone: 'path' },
            { text: ' to get started.', tone: 'muted' },
        ],
    ],
    documents: {
        '/home/investigator/README.txt': `BLACKBOX · Investigation environment
====================================

Welcome, investigator.

This environment is a read-only copy of Halcyon's systems at the time
of incident INC-2417. Nothing here is real and nothing can be broken:
explore freely.

Your job is to answer four questions:
  1. Which request generated the export?
  2. Since when was the system vulnerable?
  3. Was the token legitimate?
  4. What is the root cause and how should it be fixed?

How to work:
  status        shows objectives, evidence and progress
  submit <x>    submits an answer to an open objective
  hint          asks for a hint when you get stuck

Start with the incident report, in /incident.`,
        '/home/investigator/notes.txt': `on-call notes · r.alves · Mar 14, 04:30 UTC

- the alert fired at 03:51, but the export happened before that.
  look for the request in the gateway access log.
- copied the token from the suspicious request to
  /incident/evidence/token.jwt. haven't checked if it's valid yet.
- the auth team swears nothing changed in auth-service.
  the token issuance log is in /services/auth.
- the gateway was deployed overnight. pipeline logs in /deploy.
- the previous gateway config was archived in /archive.
- decoding is not the same as validating. remember that.`,
        '/incident/report.txt': `PRELIMINARY REPORT · INC-2417 · Halcyon Billing
Status: under investigation · Severity: SEV-2

What was observed
At 03:51 UTC, monitoring detected an invoice export with 18,342 rows,
far above the 5,000 threshold.

The export was made by the account guest-7781, which has the "viewer"
role. Viewer accounts can only view invoices; exporting requires the
"admin" role.

Containment
- 03:58 the session token was revoked.
- 04:06 the export endpoint was disabled.
- 04:12 the exported file was quarantined before any download.
  No data left the company.

What we still don't know
How a viewer account performed an admin action and why no security
layer prevented it.

Where to look
/incident    timeline and collected evidence
/services    service logs and configuration
/deploy      deployment pipeline records
/archive     previous configurations`,
    },
    evidenceLabels: {
        brief: 'Mission briefing',
        notes: 'On-call notes',
        history: "Another investigator's command history",
        report: 'Preliminary incident report',
        timeline: 'Incident timeline',
        accessLog: 'Gateway access log',
        issuedLog: 'Token issuance log',
        tokenDecoded: 'Decoded token contents',
        tokenVerified: 'Token signature verification',
        deploymentLog: 'Gateway deployment log',
        gatewayConfig: 'Active gateway configuration',
        previousConfig: 'Previous gateway configuration (v3.7.2)',
    },
    challenges: {
        recon: {
            title: 'Reconnaissance',
            objective: 'Explore the environment and read the incident report.',
            success:
                'Context understood: you know what happened, but not yet how. New objectives are unlocked.',
            hints: [
                'Use ls to see what is in the current directory and cat to read a file.',
                'The README.txt in your directory says where the report is. Try: cd /incident',
                'Read the report with: cat /incident/report.txt',
            ],
            skills: ['Environment exploration', 'Reading technical documentation'],
        },
        requestTrace: {
            title: 'Trace the request',
            objective: 'Find the request that generated the export.',
            question: 'What is the request id of the unauthorized export?',
            success:
                'Request identified: r-5c19e2. Notice the detail: the same session (jti=7f3c91) got a 403 as viewer at 03:40 and, two minutes later, went through as admin.',
            hints: [
                'Every request goes through the gateway. Look for its logs in /services.',
                'Filter the access log by the export route: grep export /services/gateway/access.log',
                'There are two exports with status 200, but only one was made by guest-7781. Submit the value of the req field.',
            ],
            skills: ['Log analysis', 'Event correlation'],
        },
        deployWindow: {
            title: 'Exposure window',
            objective: 'Find out since when the gateway accepted this request.',
            question:
                'At what time (UTC) did the gateway start behaving this way? The deployed version also counts.',
            success:
                'Exposure bounded: since 03:05:12 UTC, when gateway 3.8.0 went live with the debug profile.',
            hints: [
                'Something changed in the system shortly before the incident. Check whether anything was deployed.',
                'Pipeline records live in /deploy. Read deployment.log and look at the profile that was loaded.',
                'The "rollout complete" line marks when the new version started receiving traffic. Submit that time or the version.',
            ],
            skills: ['Timeline reconstruction', 'Reading deployment records'],
        },
        tokenForgery: {
            title: 'The token',
            objective: 'Analyze the token used in the export and check whether it is legitimate.',
            question: 'Which token claim was tampered with?',
            success:
                'Tampered token: the role claim was changed from viewer to admin after it was issued. The signature no longer matches the contents, and the gateway still accepted the token.',
            hints: [
                'A JWT has three parts: header, contents (payload) and signature. There is a command to inspect it; check help.',
                'Run jwt decode /incident/evidence/token.jwt and compare the contents with the issuance recorded in /services/auth/issued.log (look for the jti).',
                'Decoding only reads the contents; the signature is what proves authenticity. Run jwt verify on the same file and compare the issued role with the role inside the token.',
            ],
            skills: ['JWT fundamentals', 'Token validation', 'Authentication and authorization'],
        },
        rootCause: {
            title: 'Root cause',
            objective: 'Explain why the gateway accepted the token and how to fix it.',
            question: 'Describe, in your own words, the root cause and the fix.',
            success: 'Conclusion accepted. The investigation is complete.',
            hints: [
                "Compare the gateway's active configuration with the previous version.",
                'Read /services/gateway/config.yaml and /archive/gateway-config-v3.7.2.yaml. Two authentication settings changed, and the deployment log explains why.',
                'Your conclusion must mention that signature verification was turned off and that it came from the debug profile loaded in the deploy. Example: submit the debug profile disabled signature verification; re-enable verify_signature and remove the debug profile',
            ],
            skills: [
                'Root cause analysis',
                'Configuration analysis',
                'Identifying authorization issues',
            ],
        },
    },
    conceptLabels: {
        roleClaim: 'which claim was changed',
        signatureCheck: 'the JWT signature verification',
        debugProfile: 'the configuration profile loaded in the deploy',
        claimAuthorization: "authorization based on the token's claims",
    },
    report: {
        summary:
            'At 03:42 UTC, the account guest-7781 (viewer) exported 18,342 invoices using a tampered token. The export was contained before any download.',
        cause: 'The gateway 3.8.0 deploy, at 03:05 UTC, inherited GATEWAY_PROFILE=debug from the staging environment. That profile turns off JWT signature verification and trusts the role declared in the token itself. A token with its role changed from viewer to admin was accepted.',
        fix: 'Re-enable verify_signature, set role_source back to user_directory, remove the debug profile from the production manifest and block production deploys with any profile other than production.',
    },
};
