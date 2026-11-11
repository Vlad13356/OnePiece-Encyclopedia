import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Yokoso from './Yokoso';
import Encyclopedia from './Encyclopedia'; // sau cum l-ai numit


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Yokoso />} />
                <Route path="/enciclopedie" element={<Encyclopedia/>} />
                {/* Provocarea ta: Adaugă aici a doua rută pentru pagina cu carduri! */}

            </Routes>
        </BrowserRouter>
    );
}

export default App;