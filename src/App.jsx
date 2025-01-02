// App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/temps/Navbar";
import './styles/main/Home.css';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
