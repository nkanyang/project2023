<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" 
    integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" 
    crossorigin="anonymous" 
    />
  <link rel="stylesheet" href="./style.css">
  <title>Times-Table-Challenge</title>
</head>
<body>
  <header>
    <h1>Times Table Challenge For Bella</h1>
  </header>
  <div class="prompt__container">
    <div >
      <h2>Time Left: </h2>
      <div class="timer" id="timer">00:00</div>
    </div>
    <button class="start__button" id="startBtn">Start Challenge</button>
    <div>
      <p class="counter" id="completedCounter">0</p>
      <h2>Completed</h1>
    </div>
  </div>
  <form id="resultForm">
    <div class="input__container">
      <label id="factor1"></label>
      <i class="fas fa-times"></i>
      <label id="factor2"></label>
      <i class="fas fa-equals"></i>
      <input type="text" class="todo__input" name="" id="result">
      <span class='warning' id="warning"></span>
      <button id="submitButton" type="submit">submit</button>
    </div>
    <!-- <div class="keyboard__container">
      <div class="keyboard_row">
        <button id="number1">1</button>
        <button id="number2">2</button>
        <button id="number3">3</button>
      </div>
      <div class="keyboard_row">
        <button id="number4">4</button>
        <button id="number5">5</button>
        <button id="number6">6</button>
      </div>
      <div class="keyboard_row">
        <button id="number8">7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div class="keyboard_row">
        <button>0</button>
        <button id="submitButton" type="submit" class="submit__button">submit</button>
      </div>
    </div> -->
  </form>
  <!-- <div class="result__container">
    <h2>You have complete </h2>
    <ul class="result__list">
      <div class="todo__div">
        <button class="todo__togglebtn"><i class='fas fa-check'></i></button>
        <li class="todo_item">do the laundry</li>
        <button class="todo__deletebtn"><i class='fas fa-trash'></i></button>
      </div>
    </ul>
  </div> -->

  <script src="./app.js"></script>
</body>
</html>
