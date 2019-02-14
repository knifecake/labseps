const db = {"days": {"10": {"9": [2, 6, 8, 9, 11, 13, 14, 15, 17, 22, 23, 28, 34], "10": [2, 6, 8, 9, 11, 13, 14, 15, 17, 22, 23, 28, 34], "11": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 25, 28, 34], "12": [3, 6, 7, 8, 10, 11, 12, 13, 15, 17, 18, 21, 22, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "14": [3, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 21, 22, 23, 25, 28, 34], "15": [3, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 21, 22, 25, 28, 34], "16": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 25, 28, 34], "17": [2, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 22, 23, 28, 34], "18": [2, 6, 8, 11, 14, 15, 17, 28, 34], "19": [2, 3, 6, 8, 10, 11, 13, 14, 15, 17, 21, 25, 28, 34]}, "11": {"9": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 22, 25, 28, 34], "10": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 22, 25, 28, 34], "11": [3, 6, 7, 8, 10, 11, 12, 13, 17, 18, 21, 22, 23, 25, 28, 34], "12": [3, 6, 7, 8, 10, 11, 12, 13, 17, 18, 21, 22, 23, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 11, 13, 14, 15, 17, 21, 22, 23, 28, 34], "14": [3, 6, 8, 11, 14, 15, 17, 22, 28, 34], "15": [3, 6, 8, 10, 11, 12, 14, 17, 18, 22, 25, 28, 34], "16": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 21, 22, 23, 25, 28, 34], "17": [2, 3, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 21, 22, 23, 28, 34], "18": [3, 6, 8, 12, 14, 28, 34], "19": [3, 6, 8, 10, 11, 12, 14, 25, 28, 34]}, "12": {"9": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 22, 23, 25, 28, 34], "10": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 22, 23, 25, 28, 34], "11": [6, 7, 8, 9, 12, 13, 14, 17, 18, 21, 22, 23, 25, 28, 34], "12": [6, 7, 8, 9, 12, 13, 14, 17, 18, 21, 22, 23, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 17, 21, 22, 25, 28, 34], "14": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 17, 23, 25, 28, 34], "15": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 25, 28, 34], "16": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 21, 22, 23, 25, 28, 34], "17": [3, 6, 7, 8, 9, 10, 12, 13, 14, 17, 22, 23, 25, 28, 34], "18": [6, 8, 9, 13, 14, 17, 22, 28, 34], "19": [2, 6, 8, 9, 11, 13, 14, 15, 17, 21, 22, 28, 34]}, "13": {"9": [2, 3, 6, 8, 9, 10, 11, 13, 14, 15, 17, 21, 22, 23, 25, 28, 34], "10": [2, 3, 6, 8, 9, 10, 11, 13, 14, 15, 17, 21, 22, 23, 25, 28, 34], "11": [3, 6, 8, 13, 14, 15, 17, 21, 22, 23, 28, 34], "12": [3, 6, 8, 13, 14, 15, 17, 21, 22, 23, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 12, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "14": [2, 3, 6, 7, 8, 9, 10, 12, 14, 15, 17, 18, 23, 25, 28, 34], "15": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 23, 25, 28, 34], "16": [2, 3, 6, 8, 10, 11, 13, 14, 15, 17, 22, 25, 28, 34], "17": [2, 6, 8, 11, 13, 14, 15, 17, 22, 28, 34], "18": [2, 6, 8, 11, 14, 15, 17, 22, 28, 34], "19": [3, 6, 8, 10, 11, 14, 17, 22, 25, 28, 34]}, "14": {"9": [2, 3, 6, 8, 9, 10, 13, 14, 17, 25, 28, 34], "10": [2, 3, 6, 8, 9, 10, 13, 14, 17, 25, 28, 34], "11": [2, 3, 6, 8, 10, 11, 13, 14, 15, 17, 25, 28, 34], "12": [2, 3, 6, 8, 10, 11, 13, 14, 15, 17, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "14": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "15": [2, 3, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 21, 22, 25, 28, 34], "16": [3, 6, 7, 8, 9, 10, 12, 14, 17, 18, 23, 28, 34], "17": [3, 6, 7, 8, 9, 10, 12, 14, 17, 18, 23, 28, 34], "18": [2, 3, 6, 8, 10, 11, 12, 13, 14, 15, 17, 25, 28, 34], "19": [2, 3, 6, 8, 10, 11, 12, 13, 14, 15, 17, 25, 28, 34]}, "20": {"9": [3, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 21, 22, 23, 25, 28, 34], "10": [3, 6, 7, 8, 10, 11, 13, 17, 21, 22, 23, 25, 28, 34], "11": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "12": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 18, 21, 23, 25, 28, 34], "14": [3, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18, 21, 23, 25, 28, 34], "15": [2, 3, 6, 8, 9, 10, 11, 12, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "16": [2, 3, 6, 8, 9, 10, 11, 14, 15, 17, 22, 25, 28, 34], "17": [3, 6, 7, 8, 10, 13, 14, 17, 22, 25, 28, 34], "18": [3, 6, 8, 13, 14, 17, 23, 25, 28], "19": [2, 3, 6, 7, 8, 9, 11, 13, 14, 15, 17, 23, 25, 28]}, "21": {"9": [3, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 25, 34], "10": [3, 6, 7, 8, 10, 11, 13, 17, 25, 34], "11": [2, 3, 6, 7, 8, 10, 11, 12, 13, 17, 18, 21, 22, 23, 25, 28, 34], "12": [3, 6, 8, 9, 10, 11, 12, 13, 21, 22, 23, 25, 28, 34], "13": [3, 6, 8, 9, 10, 11, 12, 14, 18, 28, 34], "14": [2, 3, 6, 7, 8, 9, 10, 11, 14, 15, 17, 28, 34], "15": [2, 3, 6, 7, 8, 9, 10, 11, 13, 14, 17, 21, 22, 23, 25, 28, 34], "16": [2, 3, 6, 7, 8, 10, 11, 12, 13, 14, 17, 18, 21, 22, 23, 25, 28, 34], "17": [3, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 22, 23, 25, 28, 34], "18": [2, 3, 6, 8, 14, 23, 25, 28, 34], "19": [2, 3, 6, 8, 14, 23, 25, 28, 34]}, "22": {"9": [2, 3, 6, 7, 8, 9, 10, 13, 14, 17, 25, 34], "10": [2, 3, 6, 7, 8, 9, 10, 13, 14, 17, 25, 34], "11": [2, 3, 6, 8, 9, 10, 11, 13, 14, 15, 17, 18, 23, 25, 28, 34], "12": [2, 3, 6, 8, 9, 10, 11, 13, 14, 15, 17, 18, 23, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 21, 22, 23, 28, 34], "14": [2, 3, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 34], "15": [3, 6, 8, 10, 12, 13, 14, 17, 18, 21, 22, 25, 34], "16": [2, 3, 6, 8, 9, 10, 11, 12, 14, 17, 18, 21, 22, 23, 25, 28, 34], "17": [2, 3, 6, 8, 9, 10, 12, 13, 14, 15, 17, 18, 21, 22, 23, 28, 34], "18": [3, 6, 8, 10, 14, 15, 18, 23, 28, 34], "19": [3, 6, 7, 8, 10, 11, 14, 15, 18, 23, 25, 28, 34]}, "23": {"9": [3, 6, 8, 9, 12, 13, 14, 15, 17, 18, 25, 34], "10": [3, 6, 8, 9, 12, 13, 14, 15, 17, 18, 25, 34], "11": [2, 3, 6, 7, 8, 9, 11, 13, 14, 15, 17, 18, 21, 22, 23, 28, 34], "12": [2, 3, 6, 7, 8, 9, 11, 13, 14, 15, 17, 18, 21, 22, 23, 28, 34], "13": [3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 22, 23, 25, 28, 34], "14": [3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 22, 25, 28, 34], "15": [2, 3, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 21, 22, 25, 28, 34], "16": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "17": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 22, 23, 28, 34], "18": [2, 3, 6, 7, 8, 10, 12, 13, 14, 15, 17, 18, 22, 23, 28, 34], "19": [2, 3, 6, 8, 10, 11, 13, 14, 15, 17, 21, 22, 23, 25, 28, 34]}, "24": {"9": [2, 3, 6, 7, 8, 13, 14, 15, 17, 21, 25, 34], "10": [2, 3, 6, 7, 8, 12, 13, 14, 15, 17, 18, 21, 23, 25, 34], "11": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 23, 25, 28, 34], "12": [2, 3, 6, 8, 9, 10, 11, 13, 14, 15, 17, 18, 23, 25, 28, 34], "13": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "14": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34], "15": [2, 3, 6, 8, 10, 11, 13, 14, 15, 17, 25, 28, 34], "16": [2, 3, 6, 7, 8, 10, 11, 13, 14, 15, 17, 25, 28, 34], "17": [3, 6, 8, 10, 14, 15, 17, 21, 28, 34], "18": [3, 6, 8, 10, 14, 15, 17, 21, 28, 34], "19": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 28, 34]}}, "rooms": {"2": "Laboratorio 08b", "6": "Laboratorio 03a", "8": "Laboratorio 04a", "9": "Laboratorio 04b", "11": "Laboratorio 09", "13": "Laboratorio 06a", "14": "Laboratorio 06b", "15": "Laboratorio 10", "17": "Laboratorio 15", "22": "Laboratorio 12", "23": "Laboratorio 08a", "28": "Laboratorio 14", "34": "Laboratorio 16", "3": "Laboratorio 07b", "7": "Laboratorio 03b", "10": "Laboratorio 05b", "12": "Laboratorio 02", "18": "Laboratorio 01", "21": "Laboratorio 11", "25": "Laboratorio 05a"}};

const weekdays = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
const schoolClose = 19;
const schoolOpen = 9;

// get params from URL
const urlParams = new URLSearchParams(window.location.search);
const dayParam = urlParams.get('day');
const hourParam = urlParams.get('hour');
const semesterParam = urlParams.get('semester');

let d = new Date();

// get the current day of the week correcting for monday = 0
let day = d.getDay() - 1;
if (day == -1) day = 6;

let hour = d.getHours(); // get the current hour

let semester = (d.getMonth() >= 1 && d.getMonth() <= 7) ? 2 : 1; // get the current semester

if (dayParam !== null && hourParam !== null && semesterParam !== null) {
  day = +dayParam;
  hour = +hourParam;
  semester = +semesterParam;
}

let semesterDescription = (semester == 1) ? "1<sup>er</sup> cuatrimestre" : "2º cuatrimestre";
let dayIndex = day + 10 * semester;

// show the query to the user
document.getElementById('query-description').innerHTML = `Laboratorios libres los <b>${weekdays[day]}</b> a las <b>${hour}h</b> durante el <b>${semesterDescription}</b>:`;

// check if the school is open

if (hour < schoolOpen || hour > schoolClose || day < 0 || day > 4) {
  // hide the result table
  document.getElementById('result-section').innerHTML = "<p class=\"text-centered\">La escuela está cerrada a estas horas</p> <p class=\"text-centered\" style=\"font-size: 7rem; margin: 1rem;\">🤓</h1>";
}

// get the free lab ids
let lab_ids = db.days[dayIndex][hour];

let results = [];

for (let i = 0; i < lab_ids.length; i++) {
  // fetch the name of the lab
  result = {id: lab_ids[i], name: db.rooms[lab_ids[i]]};

  // calculate until when this lab is free
  result.freeUntil = hour + 1;
  for (let j = hour + 1; j <= schoolClose; j++) {
    if (db.days[dayIndex][j].indexOf(result.id) != -1) {
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
