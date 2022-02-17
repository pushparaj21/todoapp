let myData = document.getElementById("inputData");
let newLocal = "dataAddButton";
let btn = document.getElementById(newLocal);
//addon
// onkeyup event

//addonend
//today test
let listdata = [];
//today test end
btn.addEventListener("click", function () {
  datatoAdd = myData.value;
  console.log(datatoAdd);
  listdata.push(datatoAdd);
  console.log(listdata);
  let createdElement = document.createElement("h1");
  createdElement.innerText = datatoAdd;
  dataContainer.appendChild(createdElement);
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
  })
);
