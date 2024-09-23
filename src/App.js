import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ItemList from './components/ItemList';
import ApiData from './components/ApiData';
import { getItems, addItem, updateItem, deleteItem } from './api';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [notification, setNotification] = useState('');

  // Carregar itens da API quando o componente monta
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      setNotification('Erro ao carregar itens');
    }
  };

  const handleAddItem = async (item) => {
    try {
      const newItem = await addItem(item);
      setItems([...items, newItem]);
      setNotification('Item adicionado com sucesso!');
    } catch (error) {
      setNotification('Erro ao adicionar item');
    }
  };

  const handleUpdateItem = async (id, updatedData) => {
    try {
      const updatedItem = await updateItem(id, updatedData);
      setItems(items.map(item => item.id === id ? updatedItem : item));
      setNotification('Item atualizado com sucesso!');
    } catch (error) {
      setNotification('Erro ao atualizar item');
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
      setNotification('Item removido com sucesso!');
    } catch (error) {
      setNotification('Erro ao remover item');
    }
  };

  return (
    <div className="App">
      <Header title="Gerenciamento de Itens" />
      <Form onAddItem={handleAddItem} />
      {notification && <div className="notification">{notification}</div>}
      <ItemList items={items} onUpdateItem={handleUpdateItem} onDeleteItem={handleDeleteItem} />
      <ApiData />
      <Footer />
    </div>
  );
}

export default App;
