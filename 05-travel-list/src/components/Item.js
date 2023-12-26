
export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* function to pass the argument(id) to the packingList from the Item  */}
      <button onClick={() => onDeleteItem(item.id)}> ❌</button>
    </li>
  );
}
