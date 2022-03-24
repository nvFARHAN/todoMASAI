var todoArray = JSON.parse(localStorage.getItem("completed")) || [];
// console.log(todoArray);
todoArray.forEach((ele) => {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = ele.todoName;
  var td2 = document.createElement("td");
  td2.innerText = ele.todoQuantity;
  var td3 = document.createElement("td");
  td3.innerText = ele.todoPriority;
  tr.append(td1, td2, td3);
  document.querySelector("#body").append(tr);
});
