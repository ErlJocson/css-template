import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation.js";
import Home from "./components/pages/Home.js";
import Cards from "./components/pages/Cards.js";
import Shadow from "./components/pages/Shadow.js";
import Button from "./components/pages/Button.js";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exactly element={<Home />} path="/" />
          <Route element={<Cards />} path="/cards" />
          <Route element={<Shadow />} path="/shadow" />
          <Route element={<Button />} path="/button" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
