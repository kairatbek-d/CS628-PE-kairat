import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CitiesList({ cities }) {
    return (
        <div className="cities-list">
            <h2>Cities List</h2>
            <ul>
                {cities.map((city) => (
                    <li key={city.id}>
                        <Link to={`/${city.id}`}>{city.name}</Link>
                </li>
            ))}
            </ul>
            <div className="city-details-container">
                <Outlet />
            </div>
        </div>
    );
}

export default CitiesList;