var todoArray = JSON.parse(localStorage.getItem("todo"));
// console.log(todoArray);
todoArray.forEach((ele, i, arr) => {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = ele.todoName;
  var td2 = document.createElement("td");
  td2.innerText = ele.todoQuantity;
  var td3 = document.createElement("td");
  td3.innerText = ele.todoPriority;
  var td4 = document.createElement("td");
  var x = document.createElement("button");
  x.setAttribute("class", "btn");
  x.innerText = "Mark as Complete";
  x.addEventListener("click", () => {
    markFunction(ele, i, arr);
  });
  td4.append(x);
  // ele.status = "No";
  tr.append(td1, td2, td3, td4);
  document.querySelector("#body").append(tr);
});
// console.log(todoArray);
// var btn = document.querySelectorAll("button");
// console.log(btn);
// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", () => {
//     console.log(event.target);
//   });
// }
var complete = JSON.parse(localStorage.getItem("completed")) || [];

function markFunction(ele, index, arr) {
  // console.log(ele);
  for (var i = index; i < arr.length - 1; i++) {
    swap(arr, i, i + 1);
  }
  complete.push(ele);
  localStorage.setItem("completed", JSON.stringify(complete));
  arr.pop();
  localStorage.setItem("todo", JSON.stringify(arr));
  window.location.reload();
  console.log(arr);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
