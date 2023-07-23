export function generateColor(text: string): string {
    return intToRGB(hashCode(text));
}

function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
}

function intToRGB(int: number): string {
    const r = (int & 0xff0000) >> 16;
    const g = (int & 0x00ff00) >> 8;
    const b = int & 0x0000ff;
    return `rgb(${r}, ${g}, ${b})`;
}
