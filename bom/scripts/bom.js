const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
  const inputValue = input.value.trim();
  if (inputValue) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    li.textContent = inputValue;
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
    });
    input.focus();
    input.value = "";
  }
});
