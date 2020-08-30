const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const counterRef = document.querySelector("#value");

let counterValue = Number(counterRef.textContent);

incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
});
decrementBtnRef.addEventListener("click", (event) => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
});
