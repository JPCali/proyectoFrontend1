import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [myPassword, setMyPassword] = useState("");

  const password = "mi password";

  useEffect(() => {
    if (myPassword === password) {
      console.log("contraseña correcta");
    } else {
      console.log("contraseña incorrecta");
    }
  }, [myPassword]);

  const buttonClickHandler = () => {
    if (myPassword === password) {
      alert("Contraseña correcta");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const passwordInputHandler = (event) => {
    setMyPassword(event.target.value);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={buttonClickHandler}>comprobar contraseña</button>
        <input
          type="text"
          className="password-input"
          value={myPassword}
          onChange={passwordInputHandler}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
