import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TerminosCondicionesPage from '../pages/TerminosCondicionesPage';
import CalcularPuntajePage from '../pages/CalcularPuntajePage';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/terminos-condiciones" element={<TerminosCondicionesPage />} />
                <Route path="/puntaje" element={<CalcularPuntajePage />} />
            </Routes>
        </>
    );
}