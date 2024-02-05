import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stat from "./components/Stat";
import PackingList from "./components/PackingList";

function App() {
  const [items, setItems] = useState([]);

  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the cart completely"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onSetItem={handleItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onClearList={clearItems}
        onToggle={handleToggle}
      />
      <Stat items={items} />
    </div>
  );
}

export default App;
