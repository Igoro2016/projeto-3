import React from 'react';
import Item from './Item';

function ItemList({ items, onUpdateItem, onDeleteItem }) {
    return (
        <div>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onUpdateItem={onUpdateItem}
                    onDeleteItem={onDeleteItem}
                />
            ))}
        </div>
    );
}

export default ItemList;
