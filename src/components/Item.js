import React, { useState } from 'react';

function Item({ item, onUpdateItem, onDeleteItem }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);

    const handleUpdate = () => {
        onUpdateItem(item.id, { name: newName });
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Salvar</button>
                </>
            ) : (
                <>
                    <span>{item.name}</span>
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                </>
            )}
            <button onClick={() => onDeleteItem(item.id)}>Remover</button>
        </div>
    );
}

export default Item;
