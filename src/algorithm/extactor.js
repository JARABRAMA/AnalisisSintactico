export function getElements(input) {
  const elements = input.split("").filter((x) => x !== " "); // ignorar los espacios

  let number = "";
  const result = [];
  let x;

  for (let i = 0; i < elements.length; i++) {
    x = elements[i];

    if (isDigit(x)) {
      number = `${number}${x}`;

      if (elements.length === i + 1) result.push(number);

      continue;
    }
    if (number.length !== 0) {
      result.push(number);
      result.push(x);
      number = "";
      continue;
    }
    result.push(x);
  }
  return result.map((x) => {
    if (isDigit(x)) return getNumber(x);
    return x;
  });
}

function getNumber(input) {
  let decimal = 1;
  let digits = input.split("").reverse();
  let result = 0;

  for (const digit of digits) {
    result = result + digit * decimal;

    decimal = 10 * decimal;
  }
  return result;
}

// expresion regular que chequea si un caracter es un numero
function isDigit(char) {
  return /\d/.test(char);
}
