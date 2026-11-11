import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    // 1. Aici definim 'State'-urile pentru formular.
    // Am pus 'nume' ca exemplu. Trebuie să adaugi și pentru celelalte.
    const [nume, setNume] = useState('');
    const [rol, setRol] = useState('');
    const [fruct, setFruct] = useState('');
    const [recompensa, setRecompensa] = useState('');
    const [idEchipaj, setIdEchipaj] = useState('1'); // Default la 1 (Straw Hats)

    // Am extras logica de preluare a datelor într-o funcție separată
    // pentru a o putea apela și după ce salvăm un personaj nou.
    const fetchCharacters = () => {
        fetch('http://localhost:8081/api/characters/Characters-list')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Eroare la conectarea cu serverul Java');
                }
                return response.json();
            })
            .then(data => setCharacters(data))
            .catch(err => setError(err.message));
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    // 2. Funcția care se va apela când apeși butonul de "Adaugă" din formular
    const salveazaPersonaj = (event) => {
        event.preventDefault();

        // 3. Construiește obiectul pe care îl vei trimite la Java
        const personajNou = {
            name: nume,
            role: rol,
            devilfruit: fruct,
            bounty: parseInt(recompensa) || 0,
            crew: { idCrew: parseInt(idEchipaj) }
        };

        // 4. Trimite obiectul către backend
        fetch('http://localhost:8081/api/characters/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personajNou)
        })
            .then(response => {
                if (response.ok) {
                    // Dacă salvarea a reușit:
                    fetchCharacters(); // Reîncărcăm lista de pe ecran

                    // Opțional: Curățăm formularul
                    setNume('');
                    setRol('');
                    setFruct('');
                    setRecompensa('');
                    setIdEchipaj('1');
                } else {
                    console.error("Eroare la salvare");
                }
            })
            .catch(error => console.error("Eroare rețea:", error));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🏴‍☠️ Enciclopedia One Piece</h1>

            {error && <p style={{ color: 'red' }}>Eroare: {error}</p>}

            {/* 5. Aici vine formularul HTML */}
            <div style={{ backgroundColor: '#e0e0e0', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                <h3>Adaugă un Personaj Nou</h3>
                <form onSubmit={salveazaPersonaj} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input
                        type="text"
                        placeholder="Nume personaj"
                        value={nume}
                        onChange={(e) => setNume(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Rol (ex: Sniper)"
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Fructul Diavolului"
                        value={fruct}
                        onChange={(e) => setFruct(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Bounty"
                        value={recompensa}
                        onChange={(e) => setRecompensa(e.target.value)}
                        required
                    />

                    {/* Un dropdown simplu pentru echipaje (bazat pe ID-urile din data.sql) */}
                    <select value={idEchipaj} onChange={(e) => setIdEchipaj(e.target.value)}>
                        <option value="1">Straw Hat Pirates</option>
                        <option value="2">Heart Pirates</option>
                        <option value="3">Red Hair Pirates</option>
                        <option value="4">Blackbeard Pirates</option>
                    </select>

                    <button type="submit" style={{ cursor: 'pointer', backgroundColor: '#333', color: 'white', padding: '5px 15px' }}>Adaugă în Enciclopedie</button>
                </form>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>

                {characters.map(char => (
                    <div key={char.idCharacters} style={{ border: '2px solid #333', padding: '15px', borderRadius: '10px', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>

                        {/* --- INCEPUT ZONA IMAGINE --- */}
                        {char.imageUrl ? (
                            <img
                                src={char.imageUrl}
                                alt={char.name}
                                style={{ width: '100%', height: '250px', objectFit: 'contain', marginBottom: '15px', borderRadius: '5px' }}
                            />
                        ) : (
                            <div style={{ width: '100%', height: '250px', backgroundColor: '#d3d3d3', marginBottom: '15px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                                Fără imagine
                            </div>
                        )}
                        {/* --- SFARSIT ZONA IMAGINE --- */}

                        <h2 style={{ marginTop: '0', color: '#1a1a1a' }}>{char.name}</h2>
                        <p style={{ color: '#333', margin: '5px 0' }}><strong>Rol:</strong> {char.role}</p>
                        <p style={{ color: '#333', margin: '5px 0' }}><strong>Fructul Diavolului:</strong> {char.devilfruit}</p>
                        <p style={{ color: '#333', margin: '5px 0' }}><strong>Bounty:</strong> {char.bounty} Berries</p>
                        <p style={{ color: '#333', margin: '5px 0' }}><strong>Echipaj:</strong> {char.crew?.name}</p>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default App;