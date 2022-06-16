import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  /* line 8 == lines 11-13 */
  const [contador, setContador] = useState(13);

  /*
  const contador = useState(13);
  const contadorValue = contador[0];
  const setContador = contador[1];
*/

  console.log("render");

  const handleCliclk = () => {
    setContador(contador + 1);
  };

  const handleCliclkReset = () => {
    setContador(0);
  };

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";

  return (
    <div>
      <p>El valor del contador es</p>
      <h1>{contador}</h1>
      <p>{mensajePar}</p>
      <button onClick={handleCliclk}>Incrementar</button>
      <button onClick={handleCliclkReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
