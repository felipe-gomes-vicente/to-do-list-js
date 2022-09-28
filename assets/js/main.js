const inputNewTask = document.querySelector("#inputNewTask");
const btnAddTask = document.querySelector("#btnAddTask");
const listTasks = document.querySelector("#listTasks");

inputNewTask.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    let task = {
      name: inputNewTask.value,
      id: generatedId(),
    }

    addTask(task);
  }
});

btnAddTask.addEventListener('click', (event) => {
  let task = {
    name: inputNewTask.value,
    id: generatedId(),
  }
  addTask(task);
});

function generatedId() {
  return Math.floor(Math.random() * 3000);
}

function addTask(task) {
  let li = createdTagLi(task);
  listTasks.appendChild(li);
  inputNewTask.value = '';
}

function createdTagLi(task) {
  let li = document.createElement('li');

  let span = document.createElement('span');
  span.classList.add('textTask');
  span.innerHTML = task.name;

  let div = document.createElement('div');

  let btnUpdated = document.createElement('button');
  btnUpdated.classList.add('btnAction');
  btnUpdated.innerHTML = '<i class="fa fa-pencil"></i>';
  btnUpdated.setAttribute('onclick', 'updateTask('+task.id+')');

  let btnDelete = document.createElement('button');
  btnDelete.classList.add('btnAction');
  btnDelete.innerHTML = '<i class="fa fa-trash"></i>';
  btnDelete.setAttribute('onclick', 'deleteTask('+task.id+')');

  div.appendChild(btnUpdated);
  div.appendChild(btnDelete);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}

function updateTask(idTask) {
  alert(idTask)
}

function deleteTask(idTask) {
  alert(idTask)
}