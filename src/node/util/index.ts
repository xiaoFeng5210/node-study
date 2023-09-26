import util from 'node:util';

export function testInspect() {
  const obj = { name: { a: 1 } };
  util.inspect.styles.string = 'red';
  console.log(util.inspect(obj))
  // console.log(obj)
}
