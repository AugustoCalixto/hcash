export function formatRate(value: number): string {
  return `${value.toFixed(2).replace(".", ",")}%`
}
