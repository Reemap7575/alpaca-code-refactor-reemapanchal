export default function calculateCanvasDiagonal(length: string, width: string): number {
  const l = Math.abs(parseFloat(length.trim()));
  const w = Math.abs(parseFloat(width.trim()));
  if (isNaN(l) || isNaN(w)) return NaN;
  return Math.sqrt(l * l + w * w);
}
