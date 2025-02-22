import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
    const { id } = useParams();
    const city = cities.find((c) => c.id === id);

    if (!city) {
        return <p>City not found.</p>;
    }

    return (
        <div className="city-details">
            <h3>{city.name} Details</h3>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
        </div>
    );
}

export default CityDetails;