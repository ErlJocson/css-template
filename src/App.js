import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation.js";
import Home from "./components/pages/Home.js";
import Cards from "./components/pages/Cards.js";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exactly element={<Home />} path="/" />
          <Route element={<Cards />} path="/cards" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
