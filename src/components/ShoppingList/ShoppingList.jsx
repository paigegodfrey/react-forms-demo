import { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import './ShoppingList.css'

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = newItem => {
    setItems(items => [...items, newItem]);
  };

  return (
    <div className={`ShoppingList ${items.length ? "list-filled" : "list-empty"}`}>
      <h1 className="title">Shopping List</h1>
      <ListItemForm addItem={addItem} />

      {items.length ?
        items.map(item => (
          <ListItem item={item} key={item.id} />
        ))
        :
        <h3>Your shopping list is empty!</h3>
      }
    </div>
  );
}

export default ShoppingList;