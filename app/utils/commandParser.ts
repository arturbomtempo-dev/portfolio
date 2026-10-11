export interface ParsedCommand {
    name: string;
    args: string[];
}

export function parseCommandLine(input: string): ParsedCommand {
    const tokens: string[] = [];
    let currentToken = '';
    let quote: string | undefined;
    let hasToken = false;

    for (const character of input.trim()) {
        if (quote) {
            if (character === quote) {
                quote = undefined;
            } else {
                currentToken += character;
            }
        } else if (character === '"' || character === "'") {
            quote = character;
            hasToken = true;
        } else if (/\s/.test(character)) {
            if (hasToken) {
                tokens.push(currentToken);
                currentToken = '';
                hasToken = false;
            }
        } else {
            currentToken += character;
            hasToken = true;
        }
    }

    if (hasToken) {
        tokens.push(currentToken);
    }

    const [name = '', ...args] = tokens;

    return { name: name.toLowerCase(), args };
}

export function splitOptions(args: string[]) {
    const options = args.filter((arg) => arg.startsWith('-') && arg.length > 1);
    const operands = args.filter((arg) => !arg.startsWith('-') || arg.length === 1);

    return { options, operands };
}
