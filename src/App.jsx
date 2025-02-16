import { useState } from "react";
import "./App.css";
import Navbar from "./assets/Components-custom/Navbar";
import TextForm from "./assets/Components-custom/TextForm";
import About from "./assets/Components-custom/About";
import Alert from "./assets/Components-custom/alert";

function App() {
  const [mode, setmode] = useState("light");
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [alert, setalert] = useState(null);

  const showalert = (message) => {
    setalert({ msg: message });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled");
    } else {
      setmode("dark");
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      document.body.style.backgroundColor = "black";
      showalert("Dark Mode Enabled");
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <Navbar title="Navbar" mode={mode} togglemode={togglemode} />
      
      <TextForm heading="Enter text to proceed" mode={mode} mystyle={mystyle} />
      <About mode={mode} mystyle={mystyle} />
    </>
  );
}

export default App;
