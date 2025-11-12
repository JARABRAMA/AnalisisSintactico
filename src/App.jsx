import { useRef, useState } from "react";
import { descendent } from "./algorithm/descendente";
import { Header } from "./components/Header.jsx";
import { Descendent } from "./components/Descendent.jsx";
import { Footer } from "./components/Footer.jsx";
const stateMapper = {
  success: "Correcto",
  error: "Error",
};

function App() {
  const refInput = useRef();
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = refInput.current.value;

    const result = descendent(text);

    if (!result.status) {
      setError(
        `La cadena no es valida hay un error en el indice ${result.index}`
      );
      setState(stateMapper.error);
      return;
    }

    setState(stateMapper.success);
    setError(null);
  };

  return (
    <>
      <Header />
      <Descendent
        state={state}
        handleSubmit={handleSubmit}
        refInput={refInput}
        error={error}
      />
      <Footer />
    </>
  );
}

export default App;
