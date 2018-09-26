export function millisecondToMin(s) {
    s = parseInt(s / 1000);
    let min = Math.floor(s / 60);
    let sed = Math.floor(s % 60);
    return `${min<10?0:''}${min}:${sed<10?0:''}${sed}`;
}