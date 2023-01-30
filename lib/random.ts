export function randomInt(min: number, max: number) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

let lastPicked = ''
export function randomPick(arr: string[]) {
  let picked = ''
  do {
    const index = randomInt(0, arr.length)
    picked = arr[index]
  } while (picked === lastPicked)
  lastPicked = picked
  return picked
}
