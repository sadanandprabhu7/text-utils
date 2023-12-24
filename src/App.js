import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "ligth") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("ligth mode  enabled", "success");
    } else {
      setMode("ligth");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3" mode={mode}>
                <TextForm
                  heading="Enter your text to analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
              </div>
            }
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
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
