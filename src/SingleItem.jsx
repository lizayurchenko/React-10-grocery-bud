import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  const { name, id, completed } = item;

  return (
    <div className="single-item" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p style={{ textDecoration: completed && "line-through" }}>{name}</p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
