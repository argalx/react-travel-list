import { useState } from "react";

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} />
      <Stats />
    </div>
  );
}

// Logo component to display the title of the app
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

// Form component to add new items to the packing list
function Form({ onAddItems }) {
  // State to manage the form inputs
  const [description, setDescription] = useState("");
  // State to manage the quantity of items
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // Prevent the default behavior of the form like reloading the page
    e.preventDefault();

    // Validation
    if (!description) return;

    // Create a new item object with the current state values
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // Call the onAddItems function passed as a prop to add the new item
    onAddItems(newItem);

    // Return the state to its initial value
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* Input for quantity */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Input for description */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// PackingList component to display the list of items
function PackingList({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

// Item component to display each item in the list
function Item({ item, onDeleteItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

// Stats component to display the statistics of the packing list
function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have x items on your list, and you have already packed x (x%)
      </em>
    </footer>
  );
}
