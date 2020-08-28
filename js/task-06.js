const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("input", (event) => {
  inputRef.textContent = event.target.value;
});

inputRef.addEventListener("blur", () => {
  const numberOfDataLength = Number(inputRef.getAttribute("data-length"));
  if (inputRef.textContent.length === numberOfDataLength) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});
