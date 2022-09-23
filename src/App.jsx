import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Students from "./components/Students";
import About from "./components/About";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Cadastro de ALunos</h1>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                        <Link to="/alunos">Cadastro de Alunos</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/" index element={<Home />}></Route>
                    <Route path="/alunos" element={<Students />}></Route>
                    <Route path="/sobre" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
