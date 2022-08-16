import "./App.css";
import { Login } from "./pages/Login";
import { AuthContex } from "./Contex/AuthContex";
import { useContext } from "react";
import { Private } from "./Private";

function App() {
  const { token } = useContext(AuthContex);

  if (token) {
    return <Private />;
  }

  return <Login />;
}

export default App;
