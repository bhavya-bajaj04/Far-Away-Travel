function Stat({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Packing your items</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const itemPercentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {itemPercentage === 100
          ? "Your packing is done"
          : `💼 You have ${numItems} items on your list, and you have already packed
        ${packedItems}(${itemPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stat;
