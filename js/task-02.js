const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const createListElement = (ingredient) => {
  const listElementRef = document.createElement("li");
  listElementRef.textContent = ingredient;
  return listElementRef;
};

const listElement = ingredients.map((ingredient) =>
  createListElement(ingredient)
);

const ingredintsRef = document.querySelector("#ingredients");
ingredintsRef.append(...listElement);
