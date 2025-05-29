import { useState } from "react";

// Form component to add new items to the packing list
export default function Form({ onAddItems }) {
  // State to manage the form inputs
  const [description, setDescription] = useState("");
  // State to manage the quantity of items
  const [quantity, setQuantity] = useState(1);

  // Function to handle form submission
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
