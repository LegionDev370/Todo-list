const form = document.querySelector("form");
const elInput = document.querySelector("#todos");
const btn = document.querySelector("button");
let ulLi = document.querySelector(".list-todo");
const array = ["Hello","Uzmoney"];
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let inputValue = elInput.value.trim();
  array.push(inputValue);
  ulLi.innerHTML = ""
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    let elLi = document.createElement("li");
    elLi.setAttribute("class", "list-todo-item");
    elLi.innerHTML = `
      <div class="input-checkbox">
      <input type="checkbox" id="checkbox">
      <span class="list-todo-item-text">${array[i]}</span>
      </div>
      <p class="todo-list-item-link">January 3, 2022, Monday</p>
      `;
    ulLi.appendChild(elLi);
  }
  elInput.value = "";
});
