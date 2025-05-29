import { useState } from "react";

// Components
import Item from "./Item/Item";

// PackingList component to display the list of items
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  // State to manage the sorting criteria
  const [sortBy, setSortBy] = useState("input");
  // Sort the items based on the selected criteria
  let sortedItems;

  // Sort by input order
  if (sortBy === "input") sortedItems = items;

  // Sort by description
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // Sort by packed status
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
      <button onClick={onClearList}>Clear list</button>
    </div>
  );
}
