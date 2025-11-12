// simbolizamos lamda como el array vacio

export const table = [
  [null, null, null, null, ["T", "E'"], null, ["T", "E'"], null],
  [["+", "T", "E'"], ["-", "T", "E'"], null, null, null, [], null, []],
  [null, null, null, null, ["F", "T'"], null, ["F", "T'"], null],
  [[], [], ["/", "F", "T'"], ["*", "F", "T'"], null, [], null, []],
  [null, null, null, null, ["(", "E", ")"], null, ["num"], null],
];

export const mapper = {
  "+": 0,
  "-": 1,
  "/": 2,
  "*": 3,
  "(": 4,
  ")": 5,
  num: 6,
  $: 7,
  E: 0,
  "E'": 1,
  T: 2,
  "T'": 3,
  F: 4,
};
