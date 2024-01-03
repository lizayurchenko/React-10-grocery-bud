import React, { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const { name, id, completed } = item;
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div className="single-item" key={id}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />
      <p style={{ textDecoration: isCompleted && "line-through" }}>{name}</p>
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
