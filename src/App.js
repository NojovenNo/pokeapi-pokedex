import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Pokemon } from "./components/Pokemon";
function App() {
  return (
    <div className="contenerdor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/" element={<Pokemon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
