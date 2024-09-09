// App.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

const App: React.FC = () => {
  const [items, setItems] = useState<{ id: number; name: string }[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Function to add an item
  const addItem = (itemName: string) => {
    const newItem = { id: items.length + 1, name: itemName };
    setItems([...items, newItem]);
  };

  // Function to remove an item
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to update an item
  const updateItem = (id: number, newName: string) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <div className="app-container">
      <Sidebar addItem={addItem} />
      {/* Passing items, removeItem, and updateItem as props */}
      <ItemList items={items} removeItem={removeItem} updateItem={updateItem} />
    </div>
  );
};

export default App;


