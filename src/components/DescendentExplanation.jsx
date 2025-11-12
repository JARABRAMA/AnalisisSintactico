import styles from "./styles/DescendentExplanation.module.css";

const grammar = [
  "E -> T E'",
  "E' -> +TE' | -TE' | λ",
  "T -> FT'",
  "T' -> *FT' | /FT' | λ",
  "F -> número | (E)",
];

const primeros = [
  "Primeros(E) = { numero, ( }",
  "Primeros(E′) = { +, −, λ }",
  "Primeros(T) = { numero, ( }",
  "Primeros(T′) = { ∗, /, λ }",
  "Primeros(F) = { numero, ( }",
];

const siguientes = [
  "Siguiente(E) = { $, ) }",
  "Siguiente(E′) = { $, ) }",
  "Siguiente(T) = { +, −, $, ) }",
  "Siguiente(T′) = { +, −, $, ) }",
  "Siguiente(F) = { ∗, /, +, −, $, ) }",
];

const tabla = [
  ["", "+", "-", "/", "*", "(", ")", "número", "$"],
  ["E", "", "", "", "", "TE'", "", "TE'", ""],
  ["E′", "+TE'", "-TE'", "", "", "", "λ", "", "λ"],
  ["T", "", "", "", "", "FT'", "", "FT'", ""],
  ["T′", "λ", "λ", "/FT'", "*FT'", "", "λ", "", "λ"],
  ["F", "", "", "", "", "(E)", "", "número", ""],
];

export function DescendentExplanation() {
  return (
    <>
      <h2>¿Cómo se calcula si una cadena es valida? </h2>
      <p>
        Para lograrlo usamos el algoritmo LL(1) es un método de análisis
        sintáctico descendente que se usa para construir el árbol de derivación
        de una cadena a partir de una gramática libre de contexto.
      </p>

      <p>
        Consideramos la siguientes gramatica la cual no tiene ambiguedades y
        esta lista para ser utilizada con el algoritmo LL(1):
      </p>
      <div className={styles.grammarContainer}>
        {grammar.map((p, index) => {
          return <span key={index}>{p}</span>;
        })}
      </div>

      <p>Antes de crear la tabla calculamos los primeros y los siguientes</p>

      <h3>Primeros</h3>

      <div className={styles.grammarContainer}>
        {primeros.map((p, index) => {
          return <span key={index}> {p}</span>;
        })}
      </div>

      <h3>Siguientes</h3>
      <div className={styles.grammarContainer}>
        {siguientes.map((p, index) => {
          return <span key={index}> {p}</span>;
        })}
      </div>

      <h3>Tabla LL(1)</h3>
      <table className={styles.lltable}>
        <tbody>
          {tabla.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((p, index) => {
                  return <td key={index}>{p}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
