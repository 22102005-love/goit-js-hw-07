const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const counterRef = document.querySelector("#value");

let counterValue = Number(counterRef.textContent);

incrementBtnRef.addEventListener("click", () => {
  counterValue += Number(incrementBtnRef.textContent);
  counterRef.textContent = counterValue;
});
decrementBtnRef.addEventListener("click", (event) => {
  counterValue += Number(decrementBtnRef.textContent);
  counterRef.textContent = counterValue;
});
