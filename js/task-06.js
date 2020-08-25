const inputRef = document.querySelector("#validation-input");
let inputLength = 0;

inputRef.addEventListener("input", (event) => {
  inputRef.textContent = event.target.value;
  inputLength = inputRef.textContent.split("").length;
});
inputRef.addEventListener("blur", () => {
  if (inputLength === Number(inputRef.getAttribute("data-length"))) {
    inputRef.classList.add("valid");
  } else inputRef.classList.add("invalid");
});
