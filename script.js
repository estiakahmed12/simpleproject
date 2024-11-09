const form = document.querySelector("#userForm");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (name && email && password) {
    message.classList.remove("hidden");
    message.textContent = "Form submitted successfully!";

    form.reset();
  } else {
    message.classList.remove("hidden");
    message.textContent = "Please fill in all fields.";
    message.classList.add("text-red-600");
  }
});

//for TO-Do List
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Function to add a new item to the list
function addTodo() {
  const value = todoInput.value.trim();

  if (value) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.className =
      "flex justify-between items-center p-2 border rounded-md";

    // Add background color to even-indexed items
    if (todoList.children.length % 2 === 0) {
      listItem.classList.add("bg-blue-100");
    }

    // Create the text and remove button
    listItem.innerHTML = `
      <span>${value}</span>
      <button class="removeButton text-red-500 hover:text-red-700 font-semibold">Remove</button>
    `;

    // Add the item to the list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = "";

    // Attach the remove functionality to the button
    listItem.querySelector(".removeButton").addEventListener("click", () => {
      listItem.remove();
      updateStyles();
    });
  }
}

// Function to update styles after an item is removed
function updateStyles() {
  Array.from(todoList.children).forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("bg-blue-100");
    } else {
      item.classList.remove("bg-blue-100");
    }
  });
}

// Event listener for the add button
addButton.addEventListener("click", addTodo);

// Optional: Add functionality to allow pressing "Enter" to add a todo
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

//To-Do List

const myForm = document.querySelector("#myForm");
const todoInput = document.querySelector("#todoInput");
const todoListId = document.querySelector("#todoListId");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const myData = event.target.todoInput.value;

  if (!myData) {
    alert("Write Task Name");
    return;
  }

  const myList = `
  <div class= "item flex ">
  <li>${myData}<li/>
  <button class="deletebtn ml-10 mb-4 px-4 py-2 bg-blue-400 text-white">Remove<button/>
  <div/>
  `;

  todoListId.innerHTML += myList;
});

todoListId.addEventListener("click", function (event) {
  if (event.target.classList.contains("deletebtn")) {
    const deleteItem = event.target.closest(".item");
    deleteItem.remove();
  }
});

const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const calculateButton = document.querySelector("#calculateButton");
const result = document.querySelector("#result");

calculateButton.addEventListener("click", () => {
  const number1 = Number(number1.value);
  const number2 = Number(number2.value);

  if (!isNaN(number1) && !isNaN(number2)) {
    const sum = number1 + number2;

    result.textContent = `Result: ${sum} `;
  }
});
