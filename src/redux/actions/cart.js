export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CARD",
  payload: pizzaObj,
});
export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
