let arrayTask = [];
let inputTask = "";
function getTask(event) {
  inputTask = event.target.value;
  arrayTask.push("hola");
  console.log(arrayTask);
}
function addTask(task) {
  var li = document.createElement("li");
  var content = document.createTextNode(task);

  li.appendChild(content);

  document.getElementById("list").innerHTML = li.innerHTML;
}

function printArr(array) {
  document.getElementById("list").innerHTML = array.innerHTML;
}

function addTask(array) {
  array.map((x) => {
    var p = document.createElement("p");
    var content = document.createTextNode(x);
    li.appendChild(content);
  });
  var p = document.createElement("p");
  var content = document.createTextNode(task);

  li.appendChild(content);

  document.getElementById("list").innerHTML = li.innerHTML;
}

//buena mierda

for (var i = 0; i < arrayTask.length; i++) {
  var li = document.createElement("p");
  var content = document.createTextNode(arrayTask[i]);

  li.appendChild(content);

  var list = document.getElementById("tasks");

  list.appendChild(li);
}
