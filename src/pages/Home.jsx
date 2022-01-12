import React from "react";

import { Categories, SortPopup, PizzasBlock } from "../component";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => {
            console.log(name);
          }}
          items={[
            "Все",
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzasBlock key={obj.id} name={obj.name} img={obj.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Home;
