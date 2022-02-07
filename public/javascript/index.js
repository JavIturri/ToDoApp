function printTasks() {
  var i = arrayTask.length - 1;
  var listElement = document.createElement("div");
  listElement.classList.add("listElement");
  var p = document.createElement("p");
  p.classList.add("listElement-task");
  var pContent = document.createTextNode(arrayTask[i]);
  p.appendChild(pContent);
  listElement.appendChild(p);
  var buttonEdit = document.createElement("button");
  buttonEdit.classList.add("listElement-edit");
  var buttonContentEdit = document.createTextNode("Editar");
  buttonEdit.appendChild(buttonContentEdit);
  listElement.appendChild(buttonEdit);
  var buttonDel = document.createElement("button");
  buttonDel.classList.add("listElement-edit");
  var buttonContentDel = document.createTextNode("Eliminar");
  buttonDel.appendChild(buttonContentDel);
  listElement.appendChild(buttonDel);
  var list = document.getElementById("tasks");
  list.appendChild(listElement);
  buttonDel.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    list.removeChild(item);
  });
}

function getTask(event) {
  inputTask = event.target.value;
  console.log(inputTask);
  arrayTask.push(inputTask);
  console.log(arrayTask);
}

function addTask(value) {
  task = { name: value };
  axios
    .post("http://127.0.0.1:3000/postTasks", task)
    .then((response) => {
      const addedTask = response.data;
      console.log(`POST: task is added`, addedTask);
    })
    .catch((error) => console.error(error));
}

function eraseTask(str) {
  var element = document.getElementById(str);
  const parent = document.getElementById("tasks");
  parent.removeChild(element);
}

function deleteTask(value) {
  const tasktodelete = { name: value };
  console.log(tasktodelete);
  axios
    .delete("http://127.0.0.1:3000/delTasks", tasktodelete)
    .then((response) => {
      const deletedtask = response.data;
      console.log(`DELETE: deleted task:`, deletedtask);
    })
    .catch((error) => console.error(error));
}
