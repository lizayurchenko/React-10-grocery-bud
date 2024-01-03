import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

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
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    const newItems = itemsList.filter((item) => item.id !== id);
    setItemsList(newItems);
    setLocalStorage(newItems);
    toast.success("item removed from the list");
  };

  const editItem = (itemId) => {
    const newItems = itemsList.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItemsList(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items
        itemsList={itemsList}
        removeItem={removeItem}
        editItem={editItem}
      />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
