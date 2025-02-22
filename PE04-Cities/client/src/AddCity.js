import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [population, setPopulation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addCity({ name, country, population });
        navigate('/');
    };

    return (
        <div className="add-city">
            <h2>Add City</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
                <label>
                    Population:
                    <input type="text" value={population} onChange={(e) => setPopulation(e.target.value)} />
                </label>
                <button type="submit">Add City</button>
            </form>
        </div>
    );
}

export default AddCity;