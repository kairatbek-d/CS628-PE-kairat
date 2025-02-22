import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import CitiesList from './CitiesList';
import CityDetails from './CityDetails';
import AddCity from './AddCity';

function App() {
    const [cities, setCities] = useState([]);
    
    const addCity = (newCity) => {
        setCities([...cities, { ...newCity, id: newCity.name.toLowerCase() }]);
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <h1>Cities Application</h1>
                    <ul>
                        <li>
                            <Link to="/">Cities List</Link>
                        </li>
                        <li>
                            <Link to="/add">Add City</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<CitiesList cities={cities} />}>
                        <Route path=":id" element={<CityDetails cities={cities} />} />
                    </Route>
                    <Route path="/add" element={<AddCity addCity={addCity} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
