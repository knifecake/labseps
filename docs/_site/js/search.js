const db = {"days": {"0": {"9": [6, 8, 11, 13, 17, 22, 23, 28, 34], "10": [6, 8, 11, 13, 17, 22, 28, 34], "11": [6, 8, 11, 13, 17, 22, 28, 34], "12": [3, 6, 7, 8, 10, 11, 12, 13, 15, 17, 18, 21, 25, 28, 34], "13": [3, 6, 7, 8, 10, 11, 12, 13, 15, 21, 25, 28, 34], "14": [3, 6, 8, 10, 11, 12, 15, 21, 25, 28, 34], "15": [3, 6, 8, 10, 11, 15, 25, 28, 34], "16": [6, 8, 14, 17, 22, 28, 34], "17": [6, 8, 14, 17, 28], "18": [6, 8, 14, 17, 28], "19": [6, 8, 14, 17, 28]}, "1": {"9": [3, 6, 7, 8, 10, 11, 13, 17, 25, 34], "10": [3, 6, 7, 8, 10, 11, 13, 17, 25, 34], "11": [3, 6, 8, 10, 11, 13, 25, 34], "12": [3, 6, 8, 11, 28, 34], "13": [3, 6, 8, 11, 28, 34], "14": [3, 6, 8, 11, 14, 28, 34], "15": [3, 6, 8, 11, 14, 17, 28, 34], "16": [3, 6, 8, 14, 17, 22, 28, 34], "17": [3, 6, 8, 14, 28, 34], "18": [3, 6, 8, 14, 28, 34], "19": [3, 6, 8, 14, 28, 34]}, "2": {"9": [2, 3, 6, 7, 8, 9, 10, 13, 14, 17, 25, 34], "10": [6, 8, 9, 13, 14, 17, 25, 34], "11": [6, 8, 9, 13, 14, 17, 25, 34], "12": [6, 8, 9, 13, 14, 17, 28, 34], "13": [6, 8, 9, 13, 14, 17, 34], "14": [3, 6, 8, 10, 12, 13, 14, 17, 34], "15": [3, 6, 8, 10, 12, 14, 17, 34], "16": [3, 6, 8, 10, 12, 14, 17, 34], "17": [6, 8, 14, 28, 34], "18": [6, 8, 14, 28, 34], "19": [6, 8, 14, 28, 34]}, "3": {"9": [3, 6, 8, 9, 13, 14, 15, 17, 25, 34], "10": [3, 6, 8, 13, 14, 15, 17, 34], "11": [3, 6, 8, 13, 14, 15, 17, 34], "12": [3, 6, 8, 14, 15, 22, 23, 28, 34], "13": [3, 6, 8, 14, 15, 28, 34], "14": [3, 6, 7, 8, 9, 10, 14, 15, 25, 28, 34], "15": [3, 6, 8, 10, 14, 15, 25, 28, 34], "16": [2, 6, 8, 13, 14, 15, 17, 28, 34], "17": [2, 6, 8, 14, 15, 17, 22, 28, 34], "18": [6, 8, 14, 17, 22, 28, 34], "19": [6, 8, 14, 17, 22, 28, 34]}, "4": {"9": [2, 3, 6, 8, 13, 14, 17, 25, 34], "10": [2, 3, 6, 8, 13, 14, 17, 25, 34], "11": [2, 3, 6, 8, 13, 14, 17, 25, 34], "12": [2, 3, 6, 8, 10, 13, 14, 15, 17, 25, 28, 34], "13": [2, 3, 6, 8, 10, 13, 14, 15, 17, 25, 28, 34], "14": [2, 3, 6, 8, 10, 14, 15, 17, 25, 28, 34], "15": [3, 6, 8, 10, 14, 17, 28, 34], "16": [3, 6, 8, 10, 14, 17, 28, 34], "17": [3, 6, 8, 10, 14, 17, 28, 34], "18": [3, 6, 8, 10, 14, 17, 28, 34], "19": [3, 6, 8, 10, 14, 15, 17, 28, 34]}}, "rooms": {"6": "Laboratorio 03a", "8": "Laboratorio 04a", "11": "Laboratorio 09", "13": "Laboratorio 06a", "17": "Laboratorio 15", "22": "Laboratorio 12", "23": "Laboratorio 08a", "28": "Laboratorio 14", "34": "Laboratorio 16", "3": "Laboratorio 07b", "7": "Laboratorio 03b", "10": "Laboratorio 05b", "12": "Laboratorio 02", "15": "Laboratorio 10", "18": "Laboratorio 01", "21": "Laboratorio 11", "25": "Laboratorio 05a", "14": "Laboratorio 06b", "2": "Laboratorio 08b", "9": "Laboratorio 04b"}};
const weekdays = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
const schoolClose = 19;
const schoolOpen = 9;

// get params from URL
const urlParams = new URLSearchParams(window.location.search);
const dayParam = urlParams.get('day');
const hourParam = urlParams.get('hour');

let d = new Date();

// get the current day of the week correcting for monday = 0
let day = d.getDay() - 1;
if (day == -1) day = 6;

let hour = d.getHours(); // get the current hour

if (dayParam !== null && hourParam !== null) {
  day = +dayParam;
  hour = +hourParam;
}

// show the query to the user
document.getElementById('query-description').innerHTML = `Laboratorios libres los <b>${weekdays[day]}</b> entre las <b>${hour}h</b> y las <b>${hour + 1}h</b>:`;

// check if the school is open

if (hour < schoolOpen || hour > schoolClose || day < 0 || day > 4) {
  // hide the result table
  document.getElementById('result-section').innerHTML = "<p class=\"text-centered\">La escuela está cerrada a estas horas 🤓</p>";
}

// get the free lab ids
let lab_ids = db.days[day][hour];

let results = [];

for (let i = 0; i < lab_ids.length; i++) {
  // fetch the name of the lab
  result = {id: lab_ids[i], name: db.rooms[lab_ids[i]]};

  // calculate until when this lab is free
  result.freeUntil = hour + 1;
  for (let j = hour + 1; j <= schoolClose; j++) {
    if (db.days[day][j].indexOf(result.id) != -1) {
      result.freeUntil++;
    } else {
      break;
    }
  }

  results.push(result);
}

results.sort((a, b) => b.freeUntil - a.freeUntil);

// populate the result table
let result_tbody = document.getElementById('result-tbody');
for (let i = 0; i < results.length; i++) {

  result_tbody.innerHTML += `<tr><td>${results[i].name}</td><td class="text-centered">${results[i].freeUntil}h</td></tr>`;
}
