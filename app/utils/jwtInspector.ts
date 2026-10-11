export interface DecodedJwt {
    header: Record<string, unknown>;
    payload: Record<string, unknown>;
    signature: string;
    signingInput: string;
}

const JWT_PART_COUNT = 3;
const BASE64_BLOCK_SIZE = 4;

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function decodeBase64Url(segment: string) {
    const base64 = segment.replace(/-/g, '+').replace(/_/g, '/');
    const padding = '='.repeat(
        (BASE64_BLOCK_SIZE - (base64.length % BASE64_BLOCK_SIZE)) % BASE64_BLOCK_SIZE
    );
    const binary = atob(base64 + padding);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));

    return new TextDecoder().decode(bytes);
}

function encodeBase64Url(bytes: Uint8Array) {
    const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');

    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function parseSegment(segment: string) {
    const value: unknown = JSON.parse(decodeBase64Url(segment));

    return isRecord(value) ? value : undefined;
}

export function decodeJwt(token: string): DecodedJwt | undefined {
    const parts = token.trim().split('.');

    if (parts.length !== JWT_PART_COUNT) {
        return undefined;
    }

    const [encodedHeader = '', encodedPayload = '', signature = ''] = parts;

    try {
        const header = parseSegment(encodedHeader);
        const payload = parseSegment(encodedPayload);

        if (!header || !payload) {
            return undefined;
        }

        return { header, payload, signature, signingInput: `${encodedHeader}.${encodedPayload}` };
    } catch {
        return undefined;
    }
}

export async function signHs256(signingInput: string, secret: string) {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(signingInput));

    return encodeBase64Url(new Uint8Array(signature));
}

export async function verifyHs256(decoded: DecodedJwt, secret: string) {
    return (await signHs256(decoded.signingInput, secret)) === decoded.signature;
}
