document.querySelector("#form").addEventListener("submit", myFunction);

if (localStorage.getItem("todo") == null) var todoArray = [];
else var todoArray = JSON.parse(localStorage.getItem("todo"));
function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;
  var obj = {
    todoName: name,
    todoQuantity: quantity,
    todoPriority: priority,
  };
  todoArray.push(obj);
  //   console.log(todoArray);
  localStorage.setItem("todo", JSON.stringify(todoArray));
}
