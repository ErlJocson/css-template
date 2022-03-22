import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation.js";
import Home from "./components/pages/Home.js";
import Cards from "./components/pages/Cards.js";
import Box from "./components/pages/Box.js";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exactly element={<Home />} path="/" />
          <Route element={<Cards />} path="/cards" />
          <Route element={<Box />} path="/box" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
