import React from "react";

function Categories({ items, onClick }) {
  const [state, setState] = React.useState(0);

  const onSelectState = (index) => {
    setState(index);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              className={state === index ? "active" : ""}
              onClick={() => onSelectState(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
