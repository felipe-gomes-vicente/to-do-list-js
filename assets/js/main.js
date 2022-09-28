const inputNewTask = document.querySelector("#inputNewTask");
const btnAddTask = document.querySelector("#btnAddTask");
const listTasks = document.querySelector("#listTasks");
const modelView = document.querySelector("#modelView");
const modelViewBackground = document.querySelector("#modelViewBackground");
const modelBtnClosed = document.querySelector("#modelBtnClosed");
const btnUpdateTask = document.querySelector("#btnUpdateTask");
const idTaskUpdate = document.querySelector("#idTaskUpdate");
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

btnUpdateTask.addEventListener('click', event => {
  event.preventDefault();
  let idTask = idTaskUpdate.innerHTML.replace('#', '');
  let task = {
    name: inputTaskNameUpdate.value,
    id: idTask
  }

  let currentTask = document.getElementById(''+idTask+'');
  
  if(currentTask) {
    let li = createdTagLi(task);
    listTasks.replaceChild(li, currentTask);
    handleChangeModel();
  } else {
    alert('Elemento HTML não encontrado!');
  }
});

function generatedId() {
  return Math.floor(Math.random() * 3000);
}

function addTask(task) {
  if(inputNewTask.value !== '') {
    let li = createdTagLi(task);
    listTasks.appendChild(li);
    inputNewTask.value = '';
  } else {
    alert('Adicione uma tarefa');
    
  }
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
    idTaskUpdate.innerHTML = '#' + idTask;
    inputTaskNameUpdate.value = li.innerText;
    handleChangeModel();
  } else {
    alert('Elemento HTML não encontrado!');
  }
}

function deleteTask(idTask) {
  let confirm = window.confirm('Deseja Excluir?')
  if(confirm) {
    let li = document.getElementById(''+ idTask +'');
    if(li) {
      listTasks.removeChild(li);
    } else {
      alert('Elemento HTML não encontrado!');
    }
  }
}

function handleChangeModel() {
  modelView.classList.toggle('open');
  modelViewBackground.classList.toggle('open');
}