// Elements
let math = document.getElementById("math");
let submit = document.getElementById("submit");
let inputField = document.getElementById("input");
let message01 = document.getElementById("message01");
let level = document.getElementById("level");
let next = document.getElementById("next");
let tasktext = document.getElementById("taskcount");

// Links
let x = location.href;

// Values
let level_val = 1;
var task = 0;

message01.style.display = 'none';
function randomize() {
  a = Math.floor(Math.random() * 100);
  b = Math.floor(Math.random() * 100);
  
  sum = a + b;
  math.innerHTML = a + ' + ' + b;
}

randomize();

function checkAnswer() {
  if (inputField.value == sum) {
    submit.style.backgroundColor = 'lime';
    
    message01.style.display = 'block';
    message01.style.color = 'lime';
    message01.innerHTML = 'riktig';
  } else {
    submit.style.backgroundColor = 'red';
    message01.style.display = 'block';
    message01.style.color = 'red';
    message01.innerHTML = 'feil';
  }
  if (inputField.value == '') {
    message01.style.display = 'block';
    message01.innerHTML = 'du må skrive inn et svar.'
    message01.style.color = 'red';
  }
}

// Happens when you press the 'neste oppgave' button
function nextTask() {
  if (message01.innerHTML == 'riktig') {
    randomize();
    message01.style.display = 'none';
    submit.style.backgroundColor = 'white';
    inputField.value = '';
    message01.innerHTML = '';
    task++;
    tasktext.innerHTML = 'oppgave: ' + task;
  }
}

if (task >= 5) {
  level.innerHTML = 'level 2 (nybegynner)';
}

function help() {
  location.href = 'http://127.0.0.1:5500/help/help.html';
}