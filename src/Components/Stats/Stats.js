// Stats component to display the statistics of the packing list
export default function Stats({ items }) {
  // Early return if there are no items
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list!</em>
      </p>
    );

  // Derive statistics from the items array
  // Calculate the number of items, packed items, and percentage packed
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {/* Display different messages based on the percentage packed */}
        {percentagePacked === 100
          ? "You got everything! Ready to go!"
          : `
        💼 You have ${numItems} items on your list, and you have already packed ${numPacked} ${percentagePacked}%`}
      </em>
    </footer>
  );
}
