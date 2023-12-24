import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "ligth") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("ligth");
      document.body.style.backgroundColor = "grey";
    }
  };
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3" mode={mode}>
        <TextForm heading="Enter your text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "sadanand",
  home: "sadanand home",
};
