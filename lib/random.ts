export function randomInt(min: number, max: number) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

export function randomPick(arr: string[]) {
  const len = arr.length - 1
  const index = randomInt(0, len);
  [arr[index], arr[len]] = [arr[len], arr[index]]
  return arr[index]
}
