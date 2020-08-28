const categoriesListRef = document.querySelector("#categories");

const categoriesRef = categoriesListRef.querySelectorAll(".item");
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach((categorie) => {
  let title = categorie.querySelector("h2").textContent;
  let quantityElem = categorie.querySelectorAll("li").length;
  console.log(`Категория:${title} \nКолличество элементов:${quantityElem}`);
});
