import { useState } from "react";

// Components
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";
// Initial items can be uncommented to pre-populate the list

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

// Main App component
export default function App() {
  // State to manage the list of items
  const [items, setItems] = useState([]);

  // Function to add new items to the list
  function handleAddItems(item) {
    // Add the new item to the items state
    setItems((items) => [...items, item]);
  }

  // Function to delete an item from the list
  function handleDeleteItem(id) {
    // Filter out the item with the given id
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Function to toggle the packed status of an item
  function handleToggleItem(id) {
    // Map through the items and toggle the packed status of the item with the given id
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Function to clear the entire list of items
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
