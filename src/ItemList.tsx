// ItemList.tsx
import React from 'react';
import ItemCard from './ItemCard';

type ItemListProps = {
  items: { id: number; name: string }[];
  removeItem: (id: number) => void;
  updateItem: (id: number, newName: string) => void;
};

const ItemList: React.FC<ItemListProps> = ({ items, removeItem, updateItem }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default ItemList;


