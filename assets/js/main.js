const inputNewTask = document.querySelector("#inputNewTask");
const btnAddTask = document.querySelector("#btnAddTask");
const listTasks = document.querySelector("#listTasks");
const modelView = document.querySelector("#modelView");
const modelViewBackground = document.querySelector("#modelViewBackground");
const modelBtnClosed = document.querySelector("#modelBtnClosed");
const btnUpdateTask = document.querySelector("#btnUpdateTask");
const inputTaskNameUpdate = document.querySelector("#inputTaskNameUpdate");

inputNewTask.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    let task = {
      name: inputNewTask.value,
      id: generatedId(),
    }

    addTask(task);
  }
});

modelBtnClosed.addEventListener('click', event => {
  handleChangeModel();
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
  li.id = task.id;

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
  let li = document.getElementById(''+ idTask +'');
  if(li) {
    handleChangeModel();
  }
}

function deleteTask(idTask) {
  let confirm = window.confirm('Deseja Excluir?')
  if(confirm) {
    let li = document.getElementById(''+ idTask +'');
    if(li) {
      listTasks.removeChild(li);
    }
  }
}

function handleChangeModel() {
  modelView.classList.toggle('open');
  modelViewBackground.classList.toggle('open');
}