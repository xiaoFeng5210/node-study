export function randomInt(min: number, max: number) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

export function createRandomPick(arr: string[]) {
  arr = [...arr]
  function randomPick() {
    const len = arr.length - 1
    const index = randomInt(0, len);
    const picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]]
    return picked
  }
  randomPick();
  return randomPick
}
