import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


  return (
    <div className="list">
      {/* <ul> */}
      <li>
        {sortedItems.map((item) => (
          // Actually onDeleteItem is getting from the App() and now from here the onDeleteItem is passed to
          // the Item component
          // NOTE : REMEMBER THIS POINT . whenever the button is clicked the id is passed BACK from the
          // Item to here(PackingList) and from here the id goes to the App()
          // and then after the list is updated as per the logic writter in the App() -> handleDeleteItem
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id} />
        ))}
      </li>
      {/* </ul> */}

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by Description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={onClearList}>CLEAR LIST</button>
      </div>

    </div>
  );
}
