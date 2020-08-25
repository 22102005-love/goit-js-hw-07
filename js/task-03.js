const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createItemGaleryRef = (image) => {
  const itemGaleryRef = document.createElement("li");
  itemGaleryRef.classList.add("list-item");
  const itemImageRef = document.createElement("img");
  itemImageRef.classList.add("img-item");
  itemImageRef.src = image.url;
  itemImageRef.alt = image.alt;
  itemGaleryRef.appendChild(itemImageRef);
  return itemGaleryRef;
};
const itemsGalery = images.map((image) => createItemGaleryRef(image));
const galeryRef = document.querySelector("#gallery");
galeryRef.append(...itemsGalery);
