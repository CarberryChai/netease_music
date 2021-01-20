export function sum(...nums: number[]): number {
  return nums.reduce((t, c) => t + c, 0)
}
