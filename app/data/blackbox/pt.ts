import type { MissionCopy } from '~/types/blackbox';

export const BLACKBOX_COPY_PT: MissionCopy = {
    title: 'BLACKBOX',
    subtitle: 'Uma investigação de sistema',
    bootLines: [
        [
            { text: 'blackbox', tone: 'success', isBold: true },
            { text: ' v1.0 · ambiente de resposta a incidentes', tone: 'muted' },
        ],
        [
            { text: '[ ok ] ', tone: 'success' },
            { text: 'montando volume de evidências (somente leitura)' },
        ],
        [
            { text: '[ ok ] ', tone: 'success' },
            { text: 'restaurando snapshot halcyon-prod@2026-03-14T04:20Z' },
        ],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'anonimizando dados de clientes' }],
        [
            { text: '[warn] ', tone: 'warning' },
            { text: 'trilha de auditoria do gateway incompleta' },
        ],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'sessão de investigação pronta' }],
    ],
    introLines: [
        [{ text: 'INCIDENTE INC-2417 · Halcyon Billing', tone: 'accent', isBold: true }],
        [],
        [
            {
                text: 'Às 03:51 UTC, uma conta com permissão apenas de leitura exportou 18.342 faturas. Exportar exige permissão de administrador.',
            },
        ],
        [],
        [{ text: 'O vazamento foi contido. A pergunta continua aberta:' }],
        [{ text: 'como um visitante virou administrador?', tone: 'warning', isBold: true }],
        [],
        [
            {
                text: 'Você tem acesso aos logs, configurações e registros da noite do incidente.',
                tone: 'muted',
            },
        ],
        [
            { text: 'Digite ', tone: 'muted' },
            { text: 'help', tone: 'command' },
            { text: ' para ver os comandos ou leia o ', tone: 'muted' },
            { text: 'README.txt', tone: 'path' },
            { text: ' para começar.', tone: 'muted' },
        ],
    ],
    documents: {
        '/home/investigator/README.txt': `BLACKBOX · Ambiente de investigação
===================================

Bem-vindo(a), investigador(a).

Este ambiente é uma cópia somente leitura dos sistemas da Halcyon no
momento do incidente INC-2417. Nada aqui é real e nada pode ser
quebrado: explore à vontade.

Seu trabalho é responder a quatro perguntas:
  1. Qual requisição gerou a exportação?
  2. Desde quando o sistema estava vulnerável?
  3. O token usado era legítimo?
  4. Qual é a causa raiz e como corrigi-la?

Como trabalhar:
  status        mostra objetivos, evidências e progresso
  submit <x>    envia uma resposta para um objetivo aberto
  hint          pede uma dica quando você travar

Comece pelo relatório do incidente, em /incident.`,
        '/home/investigator/notes.txt': `anotações de plantão · r.alves · 14/03, 04:30 UTC

- o alerta disparou às 03:51, mas a exportação aconteceu antes.
  procurar a requisição no access log do gateway.
- copiei o token da requisição suspeita para
  /incident/evidence/token.jwt. ainda não conferi se é válido.
- o time de auth garante que não mudou nada no auth-service.
  o log de emissão de tokens está em /services/auth.
- o gateway recebeu deploy de madrugada. logs do pipeline em /deploy.
- a config anterior do gateway foi arquivada em /archive.
- decodificar não é o mesmo que validar. lembrar disso.`,
        '/incident/report.txt': `RELATÓRIO PRELIMINAR · INC-2417 · Halcyon Billing
Status: em investigação · Severidade: SEV-2

O que foi observado
Às 03:51 UTC, o monitoramento detectou uma exportação de faturas com
18.342 linhas, muito acima do limite de 5.000.

A exportação foi feita pela conta guest-7781, que tem o papel "viewer".
Contas viewer apenas visualizam faturas; exportar exige o papel "admin".

Contenção
- 03:58 o token da sessão foi revogado.
- 04:06 o endpoint de exportação foi desativado.
- 04:12 o arquivo exportado foi colocado em quarentena antes de
  qualquer download. Nenhum dado saiu da empresa.

O que ainda não sabemos
Como uma conta viewer executou uma ação de admin e por que nenhuma
camada de segurança impediu isso.

Onde procurar
/incident    linha do tempo e evidências coletadas
/services    logs e configuração dos serviços
/deploy      registros do pipeline de implantação
/archive     configurações anteriores`,
    },
    evidenceLabels: {
        brief: 'Briefing da missão',
        notes: 'Anotações do plantão',
        history: 'Histórico de comandos de outro investigador',
        report: 'Relatório preliminar do incidente',
        timeline: 'Linha do tempo do incidente',
        accessLog: 'Access log do gateway',
        issuedLog: 'Log de emissão de tokens',
        tokenDecoded: 'Conteúdo do token decodificado',
        tokenVerified: 'Verificação da assinatura do token',
        deploymentLog: 'Log de implantação do gateway',
        gatewayConfig: 'Configuração ativa do gateway',
        previousConfig: 'Configuração anterior do gateway (v3.7.2)',
    },
    challenges: {
        recon: {
            title: 'Reconhecimento',
            objective: 'Explore o ambiente e leia o relatório do incidente.',
            success:
                'Contexto entendido: você sabe o que aconteceu, mas ainda não como. Novos objetivos foram liberados.',
            hints: [
                'Use ls para ver o que existe no diretório atual e cat para ler um arquivo.',
                'O README.txt do seu diretório indica onde está o relatório. Tente: cd /incident',
                'Leia o relatório com: cat /incident/report.txt',
            ],
            skills: ['Exploração de ambientes', 'Leitura de documentação técnica'],
        },
        requestTrace: {
            title: 'Rastrear a requisição',
            objective: 'Encontre a requisição que gerou a exportação.',
            question: 'Qual é o request id da exportação indevida?',
            success:
                'Requisição identificada: r-5c19e2. Repare no detalhe: a mesma sessão (jti=7f3c91) recebeu 403 como viewer às 03:40 e, dois minutos depois, passou como admin.',
            hints: [
                'Todo acesso passa pelo gateway. Procure os logs dele em /services.',
                'Filtre o access log pela rota de exportação: grep export /services/gateway/access.log',
                'Há duas exportações com status 200, mas só uma foi feita pela conta guest-7781. Envie o valor do campo req.',
            ],
            skills: ['Análise de logs', 'Correlação de eventos'],
        },
        deployWindow: {
            title: 'Janela de exposição',
            objective: 'Descubra desde quando o gateway aceitava essa requisição.',
            question:
                'Em que horário (UTC) o gateway passou a operar dessa forma? A versão implantada também vale.',
            success:
                'Exposição delimitada: desde 03:05:12 UTC, quando o gateway 3.8.0 subiu com o perfil debug.',
            hints: [
                'Algo mudou no sistema pouco antes do incidente. Veja se houve alguma implantação.',
                'Os registros do pipeline ficam em /deploy. Leia o deployment.log e observe o perfil carregado.',
                'A linha "rollout complete" marca quando a versão nova passou a receber tráfego. Envie esse horário ou a versão.',
            ],
            skills: ['Reconstrução de linha do tempo', 'Leitura de registros de implantação'],
        },
        tokenForgery: {
            title: 'O token',
            objective: 'Analise o token usado na exportação e verifique se ele é legítimo.',
            question: 'Qual claim do token foi adulterada?',
            success:
                'Token adulterado: a claim role foi trocada de viewer para admin depois da emissão. A assinatura não corresponde mais ao conteúdo, e mesmo assim o gateway aceitou o token.',
            hints: [
                'Um JWT tem três partes: cabeçalho, conteúdo (payload) e assinatura. Existe um comando para inspecioná-lo; veja o help.',
                'Rode jwt decode /incident/evidence/token.jwt e compare o conteúdo com a emissão registrada em /services/auth/issued.log (procure pelo jti).',
                'Decodificar apenas lê o conteúdo; quem prova a autenticidade é a assinatura. Rode jwt verify no mesmo arquivo e compare o papel emitido com o papel que está no token.',
            ],
            skills: ['Fundamentos de JWT', 'Validação de tokens', 'Autenticação e autorização'],
        },
        rootCause: {
            title: 'Causa raiz',
            objective: 'Explique por que o gateway aceitou o token e como corrigir.',
            question: 'Descreva, com suas palavras, a causa raiz e a correção.',
            success: 'Conclusão aceita. A investigação está completa.',
            hints: [
                'Compare a configuração ativa do gateway com a da versão anterior.',
                'Leia /services/gateway/config.yaml e /archive/gateway-config-v3.7.2.yaml. Duas configurações de autenticação mudaram, e o log de implantação explica o motivo.',
                'Sua conclusão precisa citar a verificação de assinatura desligada e o perfil debug carregado no deploy. Exemplo: submit o perfil debug desligou a verificação de assinatura; reativar verify_signature e remover o perfil debug',
            ],
            skills: [
                'Análise de causa raiz',
                'Análise de configurações',
                'Identificação de problemas de autorização',
            ],
        },
    },
    conceptLabels: {
        roleClaim: 'qual claim foi alterada',
        signatureCheck: 'a verificação de assinatura do JWT',
        debugProfile: 'o perfil de configuração carregado no deploy',
        claimAuthorization: 'a autorização baseada nas claims do token',
    },
    report: {
        summary:
            'Às 03:42 UTC, a conta guest-7781 (viewer) exportou 18.342 faturas usando um token adulterado. A exportação foi contida antes de qualquer download.',
        cause: 'O deploy do gateway 3.8.0, às 03:05 UTC, herdou GATEWAY_PROFILE=debug do ambiente de staging. Esse perfil desliga a verificação de assinatura dos JWTs e passa a confiar no papel declarado no próprio token. Um token com role alterada de viewer para admin foi aceito.',
        fix: 'Reativar verify_signature, voltar role_source para user_directory, remover o perfil debug do manifesto de produção e impedir deploys de produção com perfis diferentes de production.',
    },
};
