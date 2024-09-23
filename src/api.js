const API_URL = 'http://localhost:3002/api/data';

export const getItems = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addItem = async (item) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    return response.json();
};

export const updateItem = async (id, updatedData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    return response.json();
};

export const deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};

export const getApiData = async () => {
    const response = await fetch('http://localhost:3002/api/data');
    return response.json();
};
