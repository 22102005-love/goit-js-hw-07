const categoriesListRef = document.querySelector("#categories");

const categoriesRef = categoriesListRef.querySelectorAll(".item");
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach((categorie) => {
  let title = categorie.firstElementChild.textContent;
  let quantityElem = categorie.lastElementChild.children.length;
  console.log(`Категория:${title} \nКолличество элементов:${quantityElem}`);
});
