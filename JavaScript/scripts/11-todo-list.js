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

}

document.querySelector('.js-add-button')
  .addEventListener('click',() => {
    saveTodo();
  })

document.body.addEventListener('keydown',(event) => {
  if(event.key === 'Enter'){
    saveTodo();
  }
})

//printAllElements();

function printAllElements(){
  let todoListHTML ='';
  todoList.forEach((todoObject,index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-btn js-delete-btn">Delete</button>`;
    todoListHTML += html;          
  })
//   for(let i = 0; i< todoList.length;i++){
//     const todoObject = todoList[i];
//     //const name = todoObject.name;
//     //const dueDate = todoObject.dueDate;
//     const { name, dueDate } = todoObject;
//     const html = `
//       <div>${name}</div>
//       <div>${dueDate}</div>
//       <button onclick="todoList.splice(${i}, 1); printAllElements()" class="delete-todo-btn">delete</button>`;
//     todoListHTML += html;
//   }
  //console.log(todoListHTML); 
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-btn')
    .forEach((deleteButton,index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1); 
        printAllElements();
      });
    });
}
let todoList = [];
console.log(todoList);