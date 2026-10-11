import type { MissionCopy } from '~/types/blackbox';

export const BLACKBOX_COPY_ES: MissionCopy = {
    title: 'BLACKBOX',
    subtitle: 'Una investigación de sistema',
    bootLines: [
        [
            { text: 'blackbox', tone: 'success', isBold: true },
            { text: ' v1.0 · entorno de respuesta a incidentes', tone: 'muted' },
        ],
        [
            { text: '[ ok ] ', tone: 'success' },
            { text: 'montando volumen de evidencias (solo lectura)' },
        ],
        [
            { text: '[ ok ] ', tone: 'success' },
            { text: 'restaurando snapshot halcyon-prod@2026-03-14T04:20Z' },
        ],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'anonimizando datos de clientes' }],
        [
            { text: '[warn] ', tone: 'warning' },
            { text: 'registro de auditoría del gateway incompleto' },
        ],
        [{ text: '[ ok ] ', tone: 'success' }, { text: 'sesión de investigación lista' }],
    ],
    introLines: [
        [{ text: 'INCIDENTE INC-2417 · Halcyon Billing', tone: 'accent', isBold: true }],
        [],
        [
            {
                text: 'A las 03:51 UTC, una cuenta con permiso solo de lectura exportó 18.342 facturas. Exportar requiere permiso de administrador.',
            },
        ],
        [],
        [{ text: 'La fuga fue contenida. La pregunta sigue abierta:' }],
        [
            {
                text: '¿cómo un visitante se convirtió en administrador?',
                tone: 'warning',
                isBold: true,
            },
        ],
        [],
        [
            {
                text: 'Tienes acceso a los logs, configuraciones y registros de la noche del incidente.',
                tone: 'muted',
            },
        ],
        [
            { text: 'Escribe ', tone: 'muted' },
            { text: 'help', tone: 'command' },
            { text: ' para ver los comandos o lee el ', tone: 'muted' },
            { text: 'README.txt', tone: 'path' },
            { text: ' para empezar.', tone: 'muted' },
        ],
    ],
    documents: {
        '/home/investigator/README.txt': `BLACKBOX · Entorno de investigación
===================================

Bienvenido(a), investigador(a).

Este entorno es una copia de solo lectura de los sistemas de Halcyon en
el momento del incidente INC-2417. Nada aquí es real y nada se puede
romper: explora con libertad.

Tu trabajo es responder cuatro preguntas:
  1. ¿Qué solicitud generó la exportación?
  2. ¿Desde cuándo el sistema era vulnerable?
  3. ¿El token utilizado era legítimo?
  4. ¿Cuál es la causa raíz y cómo corregirla?

Cómo trabajar:
  status        muestra objetivos, evidencias y progreso
  submit <x>    envía una respuesta para un objetivo abierto
  hint          pide una pista cuando te atasques

Empieza por el informe del incidente, en /incident.`,
        '/home/investigator/notes.txt': `notas de guardia · r.alves · 14/03, 04:30 UTC

- la alerta saltó a las 03:51, pero la exportación ocurrió antes.
  buscar la solicitud en el access log del gateway.
- copié el token de la solicitud sospechosa a
  /incident/evidence/token.jwt. todavía no verifiqué si es válido.
- el equipo de auth asegura que no cambió nada en auth-service.
  el log de emisión de tokens está en /services/auth.
- el gateway recibió un deploy de madrugada. logs del pipeline en /deploy.
- la config anterior del gateway quedó archivada en /archive.
- decodificar no es lo mismo que validar. recordarlo.`,
        '/incident/report.txt': `INFORME PRELIMINAR · INC-2417 · Halcyon Billing
Estado: en investigación · Severidad: SEV-2

Qué se observó
A las 03:51 UTC, el monitoreo detectó una exportación de facturas con
18.342 filas, muy por encima del límite de 5.000.

La exportación la hizo la cuenta guest-7781, que tiene el rol "viewer".
Las cuentas viewer solo ven facturas; exportar requiere el rol "admin".

Contención
- 03:58 se revocó el token de la sesión.
- 04:06 se desactivó el endpoint de exportación.
- 04:12 el archivo exportado quedó en cuarentena antes de cualquier
  descarga. Ningún dato salió de la empresa.

Qué todavía no sabemos
Cómo una cuenta viewer ejecutó una acción de admin y por qué ninguna
capa de seguridad lo impidió.

Dónde buscar
/incident    línea de tiempo y evidencias recopiladas
/services    logs y configuración de los servicios
/deploy      registros del pipeline de despliegue
/archive     configuraciones anteriores`,
    },
    evidenceLabels: {
        brief: 'Briefing de la misión',
        notes: 'Notas de guardia',
        history: 'Historial de comandos de otro investigador',
        report: 'Informe preliminar del incidente',
        timeline: 'Línea de tiempo del incidente',
        accessLog: 'Access log del gateway',
        issuedLog: 'Log de emisión de tokens',
        tokenDecoded: 'Contenido del token decodificado',
        tokenVerified: 'Verificación de la firma del token',
        deploymentLog: 'Log de despliegue del gateway',
        gatewayConfig: 'Configuración activa del gateway',
        previousConfig: 'Configuración anterior del gateway (v3.7.2)',
    },
    challenges: {
        recon: {
            title: 'Reconocimiento',
            objective: 'Explora el entorno y lee el informe del incidente.',
            success:
                'Contexto entendido: sabes qué pasó, pero todavía no cómo. Se desbloquearon nuevos objetivos.',
            hints: [
                'Usa ls para ver qué hay en el directorio actual y cat para leer un archivo.',
                'El README.txt de tu directorio indica dónde está el informe. Prueba: cd /incident',
                'Lee el informe con: cat /incident/report.txt',
            ],
            skills: ['Exploración de entornos', 'Lectura de documentación técnica'],
        },
        requestTrace: {
            title: 'Rastrear la solicitud',
            objective: 'Encuentra la solicitud que generó la exportación.',
            question: '¿Cuál es el request id de la exportación indebida?',
            success:
                'Solicitud identificada: r-5c19e2. Fíjate en el detalle: la misma sesión (jti=7f3c91) recibió un 403 como viewer a las 03:40 y, dos minutos después, pasó como admin.',
            hints: [
                'Todo acceso pasa por el gateway. Busca sus logs en /services.',
                'Filtra el access log por la ruta de exportación: grep export /services/gateway/access.log',
                'Hay dos exportaciones con status 200, pero solo una la hizo la cuenta guest-7781. Envía el valor del campo req.',
            ],
            skills: ['Análisis de logs', 'Correlación de eventos'],
        },
        deployWindow: {
            title: 'Ventana de exposición',
            objective: 'Descubre desde cuándo el gateway aceptaba esta solicitud.',
            question:
                '¿A qué hora (UTC) el gateway empezó a funcionar así? La versión desplegada también vale.',
            success:
                'Exposición delimitada: desde las 03:05:12 UTC, cuando el gateway 3.8.0 se publicó con el perfil debug.',
            hints: [
                'Algo cambió en el sistema poco antes del incidente. Revisa si hubo algún despliegue.',
                'Los registros del pipeline están en /deploy. Lee el deployment.log y observa el perfil cargado.',
                'La línea "rollout complete" marca cuándo la nueva versión empezó a recibir tráfico. Envía esa hora o la versión.',
            ],
            skills: ['Reconstrucción de línea de tiempo', 'Lectura de registros de despliegue'],
        },
        tokenForgery: {
            title: 'El token',
            objective: 'Analiza el token usado en la exportación y verifica si es legítimo.',
            question: '¿Qué claim del token fue adulterada?',
            success:
                'Token adulterado: la claim role se cambió de viewer a admin después de la emisión. La firma ya no corresponde al contenido y, aun así, el gateway aceptó el token.',
            hints: [
                'Un JWT tiene tres partes: cabecera, contenido (payload) y firma. Existe un comando para inspeccionarlo; mira el help.',
                'Ejecuta jwt decode /incident/evidence/token.jwt y compara el contenido con la emisión registrada en /services/auth/issued.log (busca el jti).',
                'Decodificar solo lee el contenido; lo que prueba la autenticidad es la firma. Ejecuta jwt verify en el mismo archivo y compara el rol emitido con el rol que trae el token.',
            ],
            skills: ['Fundamentos de JWT', 'Validación de tokens', 'Autenticación y autorización'],
        },
        rootCause: {
            title: 'Causa raíz',
            objective: 'Explica por qué el gateway aceptó el token y cómo corregirlo.',
            question: 'Describe, con tus palabras, la causa raíz y la corrección.',
            success: 'Conclusión aceptada. La investigación está completa.',
            hints: [
                'Compara la configuración activa del gateway con la de la versión anterior.',
                'Lee /services/gateway/config.yaml y /archive/gateway-config-v3.7.2.yaml. Cambiaron dos configuraciones de autenticación, y el log de despliegue explica el motivo.',
                'Tu conclusión debe mencionar que la verificación de firma se desactivó y que eso vino del perfil debug cargado en el despliegue. Ejemplo: submit el perfil debug desactivó la verificación de firma; reactivar verify_signature y quitar el perfil debug',
            ],
            skills: [
                'Análisis de causa raíz',
                'Análisis de configuraciones',
                'Identificación de problemas de autorización',
            ],
        },
    },
    conceptLabels: {
        roleClaim: 'qué claim fue alterada',
        signatureCheck: 'la verificación de firma del JWT',
        debugProfile: 'el perfil de configuración cargado en el despliegue',
        claimAuthorization: 'la autorización basada en las claims del token',
    },
    report: {
        summary:
            'A las 03:42 UTC, la cuenta guest-7781 (viewer) exportó 18.342 facturas usando un token adulterado. La exportación se contuvo antes de cualquier descarga.',
        cause: 'El despliegue del gateway 3.8.0, a las 03:05 UTC, heredó GATEWAY_PROFILE=debug del entorno de staging. Ese perfil desactiva la verificación de firma de los JWT y confía en el rol declarado en el propio token. Se aceptó un token con el rol cambiado de viewer a admin.',
        fix: 'Reactivar verify_signature, volver role_source a user_directory, quitar el perfil debug del manifiesto de producción y bloquear los despliegues de producción con perfiles distintos de production.',
    },
};
