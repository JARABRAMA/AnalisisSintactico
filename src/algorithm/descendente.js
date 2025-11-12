// la cadena vacia la vacia la simbolizamos con lm.
// los numeros lo simbolizaremos com num.

import { table, mapper } from "./constants.js";
import { getElements } from "./extactor.js";
import { concat } from "./concatenator.js";

export function descendent(string) {
  let stack = ["$", "E"];

  const elementsNumbers = getElements(string);

  let elements = elementsNumbers.map((x) => {
    if (typeof x == "number") return "num";
    return x;
  });
  elements.push("$");

  let index = 0;

  while (true) {
    if (
      stack.length === 1 &&
      elements.length === 1 &&
      stack[0] === "$" &&
      elements[0] === "$"
    ) {
      return {
        index: null,
        status: true,
      };
    }

    console.log(`stack: ${stack} ; elements: ${elements}`);

    console.log(`comparing ${stack.at(-1)} with ${elements[0]}`);
    if (stack.at(-1) === elements[0]) {
      stack = stack.slice(0, -1);
      elements = elements.slice(1);
      index += 1;
      continue;
    }

    const lastStack = stack.at(-1);
    const firstInput = elements[0];

    // reverted cell
    const row = mapper[lastStack];
    const column = mapper[firstInput];

    console.log(`position: ${row},${column}`);
    if (row === undefined || column === undefined) {
      return { index: index, status: false };
    }

    const cell = table[row][column];
    console.log(`cell: ${cell}`);

    if (!cell) {
      return { index: index, status: false };
    }

    const reversedCell = [...cell].reverse();
    stack = concat(stack.slice(0, -1), reversedCell);
  }
}
