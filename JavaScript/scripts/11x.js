let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: '',
    dueDate: '',
  }];
console.log(todoList);
printAllElements();
function saveTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dateElement = document.querySelector('.js-due-date');
  const name = inputElement.value;
  const dueDate = dateElement.value;
  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);
  inputElement.value = '';
  dateElement.value = '';
  printAllElements();
  saveToStorage();
}

function saveToStorage(){
  let todos = JSON.stringify(todoList);
  console.log(todos);
  localStorage.setItem('todoList',todos);

}
//printAllElements();

function printAllElements(){
  let todoListHTML ='';
  for(let i = 0; i< todoList.length;i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="todoList.splice(${i}, 1); printAllElements(); saveToStorage();" class="delete-todo-btn">delete</button>`;
    todoListHTML += html;
  }
  console.log(todoListHTML); 
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;   
}