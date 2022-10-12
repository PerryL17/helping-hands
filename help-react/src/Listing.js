import { useState } from "react";

function Listing() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("enter a listing");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="add a listing..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => setNewItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Listing;
