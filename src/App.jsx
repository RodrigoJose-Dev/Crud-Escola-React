import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Home from "./components/Home";
import Students from "./components/Students";
import About from "./components/About";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <h1>Portal Escola</h1>
            <BrowserRouter>
                <Nav variant="tabs">
                    <Nav.Link as={Link} to="/">
                        Página Inicial
                    </Nav.Link>
                    <Nav.Link as={Link} to="/alunos">
                        Alunos
                    </Nav.Link>
                    <Nav.Link as={Link} to="/sobre">
                        Sobre
                    </Nav.Link>
                </Nav>

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
