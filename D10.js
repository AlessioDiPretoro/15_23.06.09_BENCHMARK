/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.round(Math.random() * 20);

/* ESERCIZIO C
Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: 
name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Alessio",
  surnane: "Di Pretoro",
  age: 36,
};

/* ESERCIZIO D
Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", 
contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["VBA", "Java Script", "C#"];
/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("NewElement");

/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.splice(-1);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  let rnd = Math.floor(Math.random() * 6) + 1;
  // console.log(rnd);
  return rnd;
};
// dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (x, y) {
  let result = 0;
  if (x > y) result = x;
  else result = y;
  console.log("il maggiore è: ", result);
};
// whoIsBigger(4, 10);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (x) {
  const myArray = x.split(" ");
  console.log(myArray);
};
// splitMe("I love coding");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (x, b) {
  if (b) {
    console.log(x.slice(1));
  } else console.log(x.slice(0, -1));
};

// deleteOne("Stringa", true);
// deleteOne("Stringa", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (x) {
  x = x.replace(/[0-9]/g, "");
  x = x.replace("  ", " ");
  // x = x.replace(/\d+|^\s+|\s+$/g, "");
  console.log("ritorna: ", x);
};

// onlyLetters("I have 4 dogs");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (x) {
  if (x.includes("@") && x.includes(".")) console.log(x, " mail valida");
  else console.log(x, " mail non valida");
};
// isThisAnEmail("mail@nomail.it");
// isThisAnEmail("mailQnomail.it");
// isThisAnEmail("mail@nomail,it");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  let date = new Date();
  let giorniSettimana = new Array(
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  );
  let today = giorniSettimana[date.getDay()];
  console.log("Oggi è: ", today);
};
// whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (x) {
  let result = { sum: 0 };
  let values = [];
  let sum = 0;
  let num = 0;
  for (let i = 0; i < x; i++) {
    num = dice();
    sum = sum + num;
    values.push(num);
  }
  result.sum = sum;
  result.values = values;
  console.log(result);
};

// rollTheDices(3);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// data nel formato: MM/GG/AAAA
const howManyDays = function (x) {
  let today = new Date();
  let oldDate = new Date(x);
  let diffInNumb = today - oldDate;
  let diffInDays = Math.floor(diffInNumb / (1000 * 3600 * 24));
  console.log("Giorni passati: ", diffInDays);
};

// howManyDays("06/08/2023");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// data nel formato: GG/MM/AAAA
const isTodayMyBirthday = function (myBirthday) {
  let today = new Date();
  let tDay = today.getDate();
  let tMonth = today.getMonth() + 1;
  let tYear = today.getFullYear();
  let todayDate = `${tDay}/${tMonth}/${tYear}`;
  console.log(todayDate === myBirthday);
  return todayDate === myBirthday;
};
// isTodayMyBirthday("9/9/1987");
// isTodayMyBirthday("9/6/2023");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let obj = {
  team: "Red",
  power: 1000,
  name: "Exam",
};

const deleteProp = function (x, y) {
  delete x[y];
  console.log(x);
};

// deleteProp(obj, "name");

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function () {
  let oldest = movies[0];

  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < parseInt(oldest.Year)) {
      oldest = movies[i];
    }
  }
  console.log(oldest);
};
// newestMovie();

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function () {
  console.log(movies.length);
};
// countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function () {
  let yearArr = [];

  for (let i = 0; i < movies.length; i++) {
    yearArr.push(movies[i].Year);
  }
  console.log(yearArr);
};
// onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function () {
  const objRes = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 2000) {
      objRes.push(movies[i]);
    }
  }

  // const arr = Object.entries(movies);
  // const result = arr.filter(parseInt(Year), 2000);
  console.log("objRes ", objRes);
};
// onlyInLastMillennium();

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function () {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum = sum + parseInt(movies[i].Year);
  }
  console.log("sum ", sum);
};
// sumAllTheYears();

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna 
  i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (title) {
  let finded = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(title)) {
      finded.push(movies[i]);
    }
  }
  console.log(finded);
};

// searchByTitle("War");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (title) {
  let match = [];
  let unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(title)) {
      match.push(movies[i]);
    } else unmatch.push(movies[i]);
  }
  console.log("match", match);
  console.log("unmatch", unmatch);
};
// searchAndDivide("Lord");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (index) {
  let arrBefore = movies.slice(0, index);
  let arrAfter = movies.slice(index + 1);
  let res = arrBefore.concat(arrAfter);
  console.log(arrBefore);
  console.log(arrAfter);
  console.log(res);
};

// removeIndex(1);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selContainer = function () {
  let myCont = document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selAllTd = function () {
  const allTd = document.querySelectorAll("td");
};
// selAllTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stamptAllTd = function () {
  let allTd1 = document.getElementsByTagName("td");
  allTd1 = Array.from(allTd1);
  for (let e = 0; e < allTd1.length; e++) {
    console.log("selAllTd", allTd1[e].innerText);
  }
};
// stamptAllTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const allLiBgRed = function () {
  let allLi = document.querySelectorAll("a");
  allLi.forEach((a) => {
    console.log("allLi", allLi);
    a.style = "background : red";
  });
};
// allLiBgRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addToMyList = function () {
  let myList = document.getElementById("myList");
  let newItem = document.createElement("li");
  newItem.innerText = "nuovo elemento";
  myList.appendChild(newItem);
};
// addToMyList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyMyList = function () {
  let myList = document.getElementById("myList");
  let myUl = document.getElementById("myList").querySelectorAll("li");
  myUl.forEach((e) => {
    console.log(e);
    e.remove();
  });
};
// emptyMyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassTest = function () {
  myTr = document.getElementsByTagName("tr");
  myTr = Array.from(myTr);
  myTr.forEach((tr) => {
    tr.classList.add("test");
  });

  // myTr = document.getElementsByTagName("tr");
  // myTr = Array.from(myTr);
  // for (let i = 0; i < myTr.length; i++) {
  //   console.log("myTr", myTr);
  //   myTr[i].classList.add("test");
  // }

  // myTr2 = document.querySelectorAll("tr");
  // myTr2.forEach((tr) => {
  //   tr.classList.add("test");
  // });
};
// addClassTest();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) 
  dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (x) {
  const halfTreePlace = document.getElementById("halfTree");
  for (let i = 0; i < x; i++) {
    const b = document.createElement("p");
    for (let y = 0; y <= i; y++) {
      b.innerText = b.innerText + "*";
    }
    halfTreePlace.appendChild(b);
  }
};

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

// const tree = function (x) {
//   const treePlace = document.getElementById("tree");
//   treePlace.style = "text-align : center";
//   for (let i = 0; i < x; i++) {
//     const b = document.createElement("p");
//     for (let y = 0; y <= i; y++) {
//       b.innerText = b.innerText + " ";
//     }
//     for (let z = 0; z <= i; z++) {
//       b.innerText = b.innerText + "*";
//     }
//     treePlace.appendChild(b);
//   }
// };

const tree = function (x) {
  const treePlace = document.getElementById("tree");
  treePlace.style = "text-align : center";
  for (let i = 0; i < x; i++) {
    const b = document.createElement("p");
    for (let y = 0; y < x - i - 1; y++) {
      b.innerText = b.innerText + " ";
    }
    for (let z = 0; z < i * 2 + 1; z++) {
      b.innerText = b.innerText + "*";
    }
    treePlace.appendChild(b);
  }
};

tree(8);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function (x) {
  let isPrime = true;
  if (x === 1) {
    console.log("1 non è un numero primo");
  } else if (x > 1) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        isPrime = false;
      }
    }
    console.log("isPrime: ", isPrime);
  }
};
// isItPrime(7);
