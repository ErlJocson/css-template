import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import { Home, Cards, Shadow, Button, Background } from "./components/Pages";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route element={<Home />} path="/css-template" />
          <Route element={<Cards />} path="/cards" />
          <Route element={<Shadow />} path="/shadow" />
          <Route element={<Button />} path="/button" />
          <Route element={<Background />} path="/background-color" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
