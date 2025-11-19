import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import "./App.css";
import { Descendent } from "./screens/Descendent.jsx";
import { Route } from "./components/Route.jsx";
import { Ascendent } from "./screens/Ascendent.jsx";

function App() {
  return (
    <>
      <Header />
      <Route component={Descendent} path="/descendent" />
      <Route component={Ascendent} path="/ascendent" />
      <Footer />
    </>
  );
}

export default App;
