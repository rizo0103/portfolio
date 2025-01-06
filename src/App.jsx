// App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Navbar from "./components/temps/Navbar";
import './styles/main/Home.css';
import './App.css';
import Footer from "./components/temps/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
