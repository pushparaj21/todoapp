let myData = document.getElementById("inputData");
let newLocal = "dataAddButton";
let btn = document.getElementById(newLocal);
let tmpContant = document.getElementById("todo-template").content;
let hlist = document.getElementById("todo-list");

let listdata = [];

btn.addEventListener("click", function () {
  datatoAdd = myData.value;
  console.log(datatoAdd);
  listdata.push(datatoAdd);
  console.log(listdata);
  // let createdElement = document.createElement("h1");
  // createdElement.innerText = datatoAdd;
  // dataContainer.appendChild(createdElement);
  let row = tmpContant.cloneNode(true);
  // let createdElement = document.createElement("h1");
  // createdElement.innerText = element;
  row.querySelector(".grid-item").textContent = datatoAdd;

  hlist.appendChild(row);
  localStorage.todo = JSON.stringify(listdata);
  //today test
  // if (localStorage.todo == undefined) {
  //   localStorage.todo = "[]";
  // } else {
  //   listdata = JSON.parse(localStorage.todo);
  // }
  // localStorage.todo = JSON.stringify(datatoAdd);
  //today test
  myData.value = "";
  // if (localStorage.getItem("itemsjson") == null) {
  //   itemsjsonArrey = [];
  //   itemsjsonArrey.push(datatoAdd);
  // } else {
  //   itemsjsonArrey = localStorage.getItem("itemsjson");
  // }
});

// let dataContainer = document.getElementById("dataContainer");
// btn.addEventListener("click", function () {
//   let createdElement = document.createElement("h1");
//   createdElement.innerText = "it is bajji paji";
//   dataContainer.appendChild(createdElement);
// });
// window.addEventListener(
//   "load",
//   (firstFun = () => {
//     if (localStorage.todo == undefined) {
//       localStorage.todo = "[]";
//     }
//   })
// );
window.addEventListener(
  "load",
  (uu = () => {
    if (localStorage.todo == undefined) {
      localStorage.todo = [];
    } else {
      listdata = [...JSON.parse(localStorage.todo)];
    }
    listdata.forEach((element) => {
      let row = tmpContant.cloneNode(true);
      // let createdElement = document.createElement("h1");
      // createdElement.innerText = element;
      row.querySelector(".grid-item").textContent = element;

      hlist.appendChild(row);
    });
  })
);
