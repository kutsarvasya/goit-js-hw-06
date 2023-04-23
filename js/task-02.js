const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector("#ingredients")
const array = ingredients.map(ingredient => {
  let liEl
  liEl = document.createElement("li")
  liEl.textContent = ingredient
  liEl.classList.add("item")
  return liEl
})
  ulEl.append(...array)







