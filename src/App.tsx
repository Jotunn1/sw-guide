import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilmsListPage from "./pages/FilmsListPage";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import CharactersListPage from "./pages/CharactersListPage";
import PlanetsListPage from "./pages/PlanetsListPage";
import SpeciesListPage from "./pages/SpeciesListPage";
import StarshipsListPage from "./pages/StarshipsListPage";
import VehiclesListPage from "./pages/VehiclesListPage";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/theme/ThemeSlice";
import store from "./store";
import { saveState } from "./utils/storage";
import PlanetPage from "./pages/PlanetPage";

store.subscribe(() => saveState(store.getState()));

function App() {
    const selectedTheme = useSelector(selectTheme);
    return (
        <div className={`App ${selectedTheme}`}>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/characters"
                            element={<CharactersListPage />}
                        />
                        <Route path="/planets" element={<PlanetsListPage />} />
                        <Route path="/planets/:id" element={<PlanetPage />} />
                        <Route
                            path="/starships"
                            element={<StarshipsListPage />}
                        />
                        <Route path="/films" element={<FilmsListPage />} />
                        <Route path="/films/:id" element={<FilmPage />} />
                        <Route
                            path="/vehicles"
                            element={<VehiclesListPage />}
                        />
                        <Route path="/species" element={<SpeciesListPage />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
