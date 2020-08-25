const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const counterRef = document.querySelector("#value");

let counterValue = Number(counterRef.textContent);

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);

function increment() {
  counterValue += Number(incrementBtnRef.textContent);
  counterRef.textContent = counterValue;
}
function decrement(event) {
  counterValue += Number(decrementBtnRef.textContent);
  counterRef.textContent = counterValue;
}
