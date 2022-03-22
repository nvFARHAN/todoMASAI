var todoArray = JSON.parse(localStorage.getItem("todo"));
// console.log(todoArray);
todoArray.forEach((ele) => {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = ele.todoName;
  var td2 = document.createElement("td");
  td2.innerText = ele.todoQuantity;
  var td3 = document.createElement("td");
  td3.innerText = ele.todoPriority;
  var td4 = document.createElement("td");
  var x = document.createElement("button");
  // x.setAttribute("type", "checkbox");
  x.innerText = "Progress";
  td4.append(x);
  ele.status = "No";
  tr.append(td1, td2, td3, td4);
  document.querySelector("#body").append(tr);
});
// console.log(todoArray);
var btn = document.querySelectorAll("button");
console.log(btn);
function myFunction() {
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      console.log("*");
    });
  }
}
