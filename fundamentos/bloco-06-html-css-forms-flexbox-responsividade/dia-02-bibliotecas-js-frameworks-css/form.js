const submitButton = document.getElementById("submit");

function addCity() {
  const cities = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"]
  let select = document.getElementById("states");

  for (let i = 0; i < cities.length; i += 1) {
    let city = document.createElement("option");

    city.innerText = cities[i];

    select.appendChild(city);
  }
};

addCity();

//must follow the placeholder's advice
function checkStartDate() {
  /* let startDate = document.getElementById("startDate").value;

  if (startDate[2] === "/" && startDate[5] === "/") {
    let splitDate = startDate.split("/");
    console.log(splitDate);
    console.log(parseInt(splitDate[0]));

    if (parseInt(splitDate[0]) <= 0 || parseInt(splitDate[0]) > 31) {
      alert("Corrija o dia!")
    };

    if (parseInt(splitDate[1]) <= 0 || parseInt(splitDate[1]) > 12) {
      alert("Corrija o mês!")
    };

    if (parseInt(splitDate[2]) < 0) {
      alert("Corrija o ano!")
    }
  }; */

  document.getElementById('startDate').DatePickerX.init();

};

checkStartDate();

function preventDefault(event) {
  event.preventDefault();
};

submitButton.addEventListener("click", preventDefault);