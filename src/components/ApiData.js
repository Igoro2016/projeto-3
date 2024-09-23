import React, { useEffect, useState } from 'react';
import { getApiData } from '../api';

function ApiData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const apiData = await getApiData();
            setData(apiData);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dados da API Utilizados</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ApiData;
