//selectors
const startButton = document.querySelector(".start__button");
const factor1 = document.getElementById('factor1')
const factor2 = document.getElementById('factor2')
const warningMsg = document.getElementById('warning')
const result = document.getElementById('result')
const submitButton = document.getElementById("submitButton"); 
const resultForm = document.getElementById('resultForm')
const completedConter = document.getElementById('completedCounter');

//Event Listeners
window.addEventListener("DOMContentLoaded",onLoad);
startButton.addEventListener("click",startTimer);
submitButton.addEventListener("click",onSubmit);

var todos = [];
var histroy = [];
var completedNumber = 0;
var timeInMin = 1;

//Functions

// function loadTodos(){
//   //load the list if exists
//   if(localStorage.getItem("todolist")){
//     todos = JSON.parse(localStorage.getItem("todolist"));
//   }
//   //display the list
//   todos.forEach(({task,isdone})=>{
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo__div");
  
//     //toggle button
//     const toggleBtn = document.createElement("button");
//     toggleBtn.innerHTML = "<i class='fas fa-check'></i>";
//     toggleBtn.classList.add("todo__togglebtn");
//     todoDiv.appendChild(toggleBtn);
  
//     //create li
//     const newTodo = document.createElement("li");
//     newTodo.innerText = task;
//     newTodo.classList.add("todo__item");
//     todoDiv.appendChild(newTodo);
  
//     //delete button 
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
//     deleteBtn.classList.add("todo__deletebtn");

//     if(isdone){
//       todoDiv.classList.toggle("todo__div--completed");
//     };
//     todoDiv.appendChild(deleteBtn);
  
//     //append to list
//     todoList.appendChild(todoDiv);
//   });
// }

function onLoad(){
  factor1.innerHTML = Math.ceil(Math.random()*9); //random 1-9
  factor2.innerHTML = Math.ceil(Math.random()*9);
  warningMsg.textContent = '';
  completedConter.innerHTML = completedNumber;
};

function onSubmit(event){
  event.preventDefault();
  const factorValue1 = parseInt(factor1.innerHTML);
  const factorValue2 = parseInt(factor2.innerHTML);
  const resultInput =  result.value;
  const resultExpect = factorValue1 * factorValue2;
  if(resultInput == resultExpect){
    completedNumber++;
    onLoad();
  }
  else{
    updateIncorrectHistory(`${factorValue1} x ${factorValue2} = ${resultExpect}`);
    warningMsg.textContent = 'x';
    // alert('The answer is incorrect, please try again.')
  }
  resultForm.reset()
}

function updateIncorrectHistory( equation ){
  const record = histroy.find( record => record.equation === equation)
  if(record){
    record.counter ++;
  }
  else{
    histroy.push({"equation":equation,"counter":1});
  }
}

function startTimer() {
  display = document.querySelector('#timer');
  result.focus();
  var timer = timeInMin * 60, minutes, seconds;
  var myTimer = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        clearInterval(myTimer);
        alert('Time is up, please checkout the result of the challenge!');
        alert(showResult())
        showResult();
    }
  }, 1000);
}

function showResult(){
  var result = `You have completed ${completedNumber} equations in ${timeInMin} minutes!\n`; 
  if(completedNumber > 10 )result = result + `\n Good Job! You got ${Math.floor(completedNumber/10)} STAR`
  if(histroy.length > 0){
    result = result + '\n Please keep working on the below ones:'
    for(var record of histroy){
      result = result + '\n' + record.equation + ' (' + record.counter + ')';
    }
  }
  histroy = [];
  return result;
}
