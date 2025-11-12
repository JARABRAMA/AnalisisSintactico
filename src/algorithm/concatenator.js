export function concat(first, second) {
  let result = first;

  for (const x of second) {
    result.push(x);
  }

  return result;
}
