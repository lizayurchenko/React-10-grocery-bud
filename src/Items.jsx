import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ itemsList, removeItem, editItem }) => {
  return (
    <div className="items">
      {itemsList.map((item) => {
        return (
          <div key={item.id}>
            <SingleItem
              item={item}
              key={item.id}
              removeItem={removeItem}
              editItem={editItem}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
