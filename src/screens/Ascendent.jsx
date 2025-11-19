import { FromInput } from "../components/FromInput";
import { ascendent } from "../algorithm/ascendent/ascendent-rl";
import { useRef, useState } from "react";
const stateMapper = {
  success: "Correcto",
  error: "Error",
};

export function Ascendent() {
  const refInput = useRef();
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = refInput.current.value;

    const result = ascendent(text);

    if (!result.isValid) {
      setError(
        `La cadena no es valida hay un error en el indice ${result.index}`
      );
      setState(stateMapper.error);
      setResult(null);
      return;
    }
    setError(null)
    setState(stateMapper.success);
    setResult(result.value);
  };

  return (
    <main>
      <header>
        <h1>Analisis Sintactico Ascendente</h1>

      </header>
        <FromInput
          refInput={refInput}
          state={state}
          error={error}
          result={result}
          handleSubmit={handleSubmit}
        />
    </main>
  );
}
