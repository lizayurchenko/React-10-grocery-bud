import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [itemsList, setItemsList] = useState(defaultList);

  const addItem = (item) => {
    const newItem = {
      name: item,
      id: nanoid(),
      completed: false,
    };

    const newItems = [...itemsList, newItem];
    setItemsList(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (id) => {
    const newItems = itemsList.filter((item) => item.id !== id);
    setItemsList(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items itemsList={itemsList} removeItem={removeItem} />
    </section>
  );
};

export default App;
