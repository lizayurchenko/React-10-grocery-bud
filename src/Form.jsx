import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("please, provide value");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery buds</h4>
      <div className="form-control">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
