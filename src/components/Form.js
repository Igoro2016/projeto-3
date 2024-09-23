import React, { useState } from 'react';

function Form({ onAddItem }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        onAddItem({ name: inputValue });
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Novo item"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Form;
