import { table, gramar, mapper } from "./ascendent-constants.js";
import { evaluate } from "mathjs";
import { getElements } from "../extactor";

export function ascendent(string) {
  const stack = [0];

  const elementsNumbers = getElements(string);

  let elements = elementsNumbers.map((x) => {
    if (typeof x === "number") return "num";
    return x;
  });
  elements.push("$");

  let index = 0;
  console.log(elements);

  while (true) {
    const lastStack = stack.at(-1);
    const firstInput = elements[0];

    if (firstInput === '$') {
      return { isValid: true, index: null, value: evaluate(string) };
    }

    const cell = table[lastStack][mapper[firstInput]];
    console.log(table);

    if (cell == null) {
      return { index, isValid: false };
    }

    if (cell === "acc") {
      return { isValid: true, value: evaluate(string) };
    }

    // SHIFT
    if (cell.startsWith("s")) {
      const state = Number(cell.slice(1));
      stack.push(state);
      elements = elements.slice(1);
      index++;
      continue;
    }

    // REDUCE
    if (cell.startsWith("r")) {
      const rule = Number(cell.slice(1));
      const gram = gramar[rule];

      // pop tantos estados como símbolos RHS
      for (let i = 0; i < gram.simbols; i++) {
        stack.pop();
      }

      const last = stack.at(-1);
      const gotoCell = table[last][mapper[gram.head]];

      if (gotoCell == null) {
        return { index, isValid: false };
      }

      stack.push(Number(gotoCell));

      index++;
    }
  }
}
