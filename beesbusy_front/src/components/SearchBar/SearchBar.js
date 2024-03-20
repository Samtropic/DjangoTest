import React, { useState, useContext } from 'react';
import axios from 'axios';
import {appContext, API_URL} from '../../App'



const SearchBar = () => {
    const context = useContext(appContext);
    const [hometown, setHometown] = useState('');
    const [ageMin, setAgeMin] = useState('');
    const [ageMax, setAgeMax] = useState('');
    const [gender, setGender] = useState('');

    const handleSearch = () => {
        axios.get(`${API_URL}/users/`, {
        params: {
            hometown,
            age_min: ageMin,
            age_max: ageMax,
            gender,
        },
        })
        .then((response) => {
            console.log(response.data)
            context.updateValue(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className='flex flex-row flex-wrap justify-evenly gap-2 bg-blue-900'>
            <input
                className='shadow-md shadow-black bg-blue-200 rounded-lg m-2 p-2'
                type="text"
                placeholder="Ville"
                value={hometown}
                onChange={(e) => setHometown(e.target.value)}
            />
            <input
                className='shadow-md shadow-black bg-blue-200 rounded-lg m-2 p-2'
                type="number"
                placeholder="Age minimum"
                value={ageMin}
                onChange={(e) => setAgeMin(e.target.value)}
            />
            <input
                className='shadow-md shadow-black bg-blue-200 rounded-lg m-2 p-2'
                type="number"
                placeholder="Age maximum"
                value={ageMax}
                onChange={(e) => setAgeMax(e.target.value)}
            />
            <select 
                aria-label='Genre'
                className='shadow-md shadow-black bg-blue-200 rounded-lg m-2 p-2'
                value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Tous</option>
                <option value="Female">Femme</option>
                <option value="Male">Homme</option>
            </select>
            <button className='shadow-md shadow-black rounded-lg m-2 p-2 hover:bg-blue-300 hover:text-black text-white' onClick={handleSearch}>Rechercher</button>
        </div>
    );
};

export default SearchBar;