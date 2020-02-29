import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { ReactComponent as Minus } from "../assets/minus.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Box } from "../assets/box.svg";
import { SekhraContext } from "../context/sekhraContext";

const ItemsList = () => {
  const { sekhra, setSekhra } = useContext(SekhraContext);
  const [item, setItem] = useState("");

  function onItemAdd() {
    if (item === "") {
      return;
    }
    setSekhra(oldSekhra => {
      return {
        ...oldSekhra,
        items: [{ id: uuid(), value: item }, ...oldSekhra.items]
      };
    });
    setItem("");
  }

  function addItemOnEnter(e) {
    if (e.keyCode === 13) {
      onItemAdd();
    }
  }

  function onItemDelete(id) {
    setSekhra(oldSekhra => {
      return {
        ...oldSekhra,
        items: oldSekhra.items.filter(item => item.id !== id)
      };
    });
  }

  return (
    <div>
      <h3 className="text-sm text-gray-300 mt-4">Describe your Sekhra</h3>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 py-2">
          <Box className="h-6 w-6 mr-2" />
        </div>
        <input
          type="text"
          className="border border-gray-100 rounded py-2 px-12 w-full"
          value={item}
          onChange={e => setItem(e.target.value)}
          onKeyDown={e => addItemOnEnter(e)}
        />
        <button className="absolute inset-y-0 right-0 px-4" onClick={onItemAdd}>
          <Plus className="h-6 w-6" />
        </button>
      </div>
      {sekhra.items.map(item => (
        <div
          className="bg-blue-light rounded text-white px-4 py-2 flex mt-2 justify-between"
          key={item.id}
        >
          <li>{item.value}</li>
          <button onClick={() => onItemDelete(item.id)}>
            <Minus className="h-6 w-6" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
