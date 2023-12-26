import React from "react";
import Toggle from "./Toggle";

const List = () => {
  const items = [
    "List-Item-1",
    "List-Item-2",
    "List-Item-3",
    "List-Item-4",
    "List-Item-5",
  ];

  return (
    <div>
      <h2>LIST OF ITEMS</h2>
      <Toggle items={items} />
    </div>
  );
};

export default List;
