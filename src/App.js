import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormColor from "./components/FormColor";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <div>
        <Titulo></Titulo>
      </div>
      <section>
        <FormColor></FormColor>
      </section>
    </>
  );
}

export default App;
