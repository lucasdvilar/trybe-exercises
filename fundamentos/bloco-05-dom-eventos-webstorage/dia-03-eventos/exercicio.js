function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
function days() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ulDays = document.getElementById("days");
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let liDays = document.createElement("li");
    liDays.className = "day";
    liDays.innerText = dezDaysList[i];

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      liDays.className += " holiday";
    };
    
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      liDays.className += " friday";
    };

    ulDays.appendChild(liDays);
  };
};

days();

function createHolidayButton(buttonName) {
  let holidayButton = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");

  holidayButton.id = "btn-holiday";
  holidayButton.innerText = buttonName;
  buttonsContainer.appendChild(holidayButton);
};

createHolidayButton("Feriados");

function changeHolidaysBackground() {
  let holidayButton = document.getElementById("btn-holiday");

  holidayButton.addEventListener("click", function() {
    let allHolidays = document.getElementsByClassName("holiday");
    
    for (let i = 0; i < allHolidays.length; i += 1) {
      if (allHolidays[i].style.backgroundColor === "pink") {
        allHolidays[i].style.backgroundColor = "rgb(238,238,238)";
      } else {
        allHolidays[i].style.backgroundColor = "pink";
      };
    };
  }) //dúvida - semicolon
};

changeHolidaysBackground();


function createFridayButton(buttonName) {
  let fridayButton = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");

  fridayButton.id = "btn-friday";
  fridayButton.innerText = buttonName;
  buttonsContainer.appendChild(fridayButton);
};

createFridayButton("Sexta-feira");

function changeFridaysText() {
  let fridayButton = document.getElementById("btn-friday");

  fridayButton.addEventListener("click", function() {
    let allFridays = document.getElementsByClassName("friday");
    let fridaysDates = [4, 11, 18, 25];

    for (let i = 0; i < allFridays.length; i += 1) {
      if (allFridays[i].innerText === "Sextou!") {
        allFridays[i].innerText = fridaysDates[i];
      } else {
        allFridays[i].innerText = "Sextou!";
      };
    };
  })
};

changeFridaysText();

function mouseOverDay() {
  let days = document.getElementsByClassName("day");

  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener("mouseover", function(event) {
      event.target.style.fontSize = "35px";
    })
  };
};

mouseOverDay();

function mouseOutDay() {
  let days = document.getElementsByClassName("day");

  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener("mouseout", function(event) {
      event.target.style.fontSize = "20px";
    })
  };
};

mouseOutDay();

function addTask(task) {
  let span = document.createElement("span");
  let myTasks = document.getElementsByClassName("my-tasks")[0];

  span.innerText = task;
  myTasks.appendChild(span);
};

addTask("cozinhar");

function addColorSubtitle(color) {
  let div = document.createElement("div");
  let myTasks = document.getElementsByClassName("my-tasks")[0];

  div.className = "task";
  div.style.backgroundColor = color;
  myTasks.appendChild(div);
};

addColorSubtitle("red"); //dúvida - pq está dando zoom?

function selectTask() {
  let color = document.getElementsByClassName("task")[0];

  color.addEventListener("click", function() {
    if (color.className === "task selected") {
      color.className = "task";
    } else {
      color.className = "task selected";
    };
  });
};

selectTask();

function addTaskColorToDay() {
  let allDays = document.getElementsByClassName("day");

  for (let i = 0; i < allDays.length; i += 1) {
    allDays[i].addEventListener("click", function(event) {
      let color = document.getElementsByClassName("task selected")[0].style.backgroundColor;
      
      event.target.style.color = color;
    });
  };
};

addTaskColorToDay();

function addAppointments() {
  let input = document.getElementById("task-input");
  let addButton = document.getElementById("btn-add");
  let list = document.querySelector(".task-list");

  addButton.addEventListener("click", function() {
    if (input.value.length === 0) {
      alert("ERRO!");
    } else {
      let li = document.createElement("li");

      li.innerText = input.value;
      list.appendChild(li);
    };
  });

  input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      if (input.value.length === 0) {
        alert("ERRO!");
      } else {
        let li = document.createElement("li");

        li.innerText = input.value;
        list.appendChild(li);
      };
    };
  });
}; //dúvidas - keypress e keyup; é possível adicionar dois tipos de evento num mesmo escutador?

addAppointments();