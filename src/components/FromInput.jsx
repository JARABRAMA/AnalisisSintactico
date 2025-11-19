import styles from "./styles/FormInput.module.css";

export function FromInput({ handleSubmit, refInput, error, state, result }) {
  return (
    <>
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
    </>
  );
}
