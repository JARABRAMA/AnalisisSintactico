import { DescendentExplanation } from "../components/DescendentExplanation.jsx";
import { useRef, useState } from "react";
import { descendent } from "../algorithm/descendente.js";
import { evaluate } from "mathjs";
import { FromInput } from "../components/FromInput.jsx";

const stateMapper = {
  success: "Correcto",
  error: "Error",
};

export function Descendent() {
  const refInput = useRef();
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = refInput.current.value;

    const result = descendent(text);

    if (!result.status) {
      setError(
        `La cadena no es valida hay un error en el indice ${result.index}`
      );
      setState(stateMapper.error);
      setResult(null);
      return;
    }

    setState(stateMapper.success);
    try {
      const res = evaluate(text);
      setResult(res);
    } catch (err) {
      setError(`Error: ${err}`);
      setResult(null);
    }
    setError(null);
  };

  return (
    <main >
      <header>
        <h1>Analisís sintactico Descendente</h1>
        <p>
          Escribe una cadena en la entrada de texto y comprueba si es una
          entrada valida para una calculadora sensilla con operaciones suma,
          resta, división y multiplicación
        </p>
      </header>

      <FromInput
        error={error}
        handleSubmit={handleSubmit}
        refInput={refInput}
        state={state}
        result={result}
      />

      <DescendentExplanation />
    </main>
  );
}
