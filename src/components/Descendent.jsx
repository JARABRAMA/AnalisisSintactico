import styles from "./styles/Descendent.module.css";
import { DescendentExplanation } from "./DescendentExplanation.jsx";
export function Descendent({ state, handleSubmit, refInput, error, result }) {
  return (
    <main className={styles.container}>
      <header>
        <h1>Analisís sintactico Descendente</h1>
        <p>
          Escribe una cadena en la entrada de texto y comprueba si es una
          entrada valida para una calculadora sensilla con operaciones suma,
          resta, división y multiplicación
        </p>
      </header>

      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <h3>Ingresa la cadena Aquí</h3>
        <input ref={refInput} type="text" required />
        <button type="submit">Analizar</button>
      </form>
      {error && <div>{error}</div>}
      {state && (
        <div className={state === "Correcto" ? styles.correct : styles.error}>
          {state}
        </div>
      )}
      {result && <div className={styles.result}>{`Resultado:  ${result}`}</div>}

      <DescendentExplanation />
    </main>
  );
}
