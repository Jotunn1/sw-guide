import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import FilmsListPage from "./pages/FilmsListPage";
import HomePage from "./pages/HomePage";
import PeoplesListPage from "./pages/PeoplesListPage";
import PlanetsListPage from "./pages/PlanetsListPage";
import SpeciesListPage from "./pages/SpeciesListPage";
import StarshipsListPage from "./pages/StarshipsListPage";
import VehiclesListPage from "./pages/VehiclesListPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/peoples" element={<PeoplesListPage />} />
                    <Route path="/planets" element={<PlanetsListPage />} />
                    <Route path="/starships" element={<StarshipsListPage />} />
                    <Route path="/films" element={<FilmsListPage />} />
                    <Route path="/vehicles" element={<VehiclesListPage />} />
                    <Route path="/species" element={<SpeciesListPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
