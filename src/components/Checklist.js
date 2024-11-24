import { useState } from "react";
import Item from "./Item";

function CheckList({items onDeleteItem, onToggleItem, onClearItems}) {
    const [sortBy, setSortBy] = useState("input");
  
    function sortItems() {
      switch(sortBy) {
        case "title":
          return items.slice().sort((a,b) => a.title.localCompare(b.title))
        case "status":
          return items.slice().sort((a,b) => Number(a.done) - Number(b.done))
        case "input":
        default:
          return items;
      }
    }
  
    const sortedItems = sortItems()
    
    return (
      <div className="list">
        <ul>
          {listItems.map((item) => (
            <Item key={item.id} item={item}  onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} /> // memanggil props
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
            <option value="input">Urutkan berdasarkan input</option>
            <option value="title">Urutkan berdasarkan judul</option>
            <option value="status">Urutkan berdasarkan status</option>
          </select>
          <button onClick={onClearItems}>Hapus</button>
        </div>
      </div>
    );
  }


export default CheckList;