$(function () {
   $('.carousel').carousel({
      interval: 2000
   });

   $('.search').on('click', function () {
      $('.navbar-form').slideToggle();
   });

   $('#elastislide').elastislide();

});

$(window).load(function () {
   let carouselCaptionWidth = $('#carousel-sidebar .active img').width();
   $('#carousel-sidebar img').each(function () {
      $(this).attr('width', carouselCaptionWidth);
   });
   $('#carousel-sidebar .sidebar-carousel-caption')
      .css('max-width', carouselCaptionWidth + 'px');

   $('#sidebar-indicators .carousel-indicators')
      .css('max-width', carouselCaptionWidth + 'px');

});


//                                    !next is test

$(function () {
   "use strict";
});

/*alert('Please read this, before you click on button');

let number = 3.2;

console.log(-4/0);
console.log('string' * 9);

const persone = `5`;

const bool = true;

const obj = {
   name: 'Jhon',
   age: 22,
   isMarried: false
};
console.log(obj.name);

let arr = ['apple.png', 'fruit.jpg', 2, 'table.bmp', 'Alex', {}, [],];
console.log(arr[5]);

const result = confirm("Are you alive?");
console.log(result);

const answer = prompt('Do You have 18', 'Enter your age');
console.log(typeof(answer));

const answers = [];

answers[0] = prompt('Как ваша фамилия?', '');
answers[1] = prompt('Как ваше имя?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));
document.write(answers);*/

/*const category = 'toys';
console.log(`https://someurl.com/${category}/boys/6`);

const user = "Petr";
alert(`Hello, ${user}`);

console.log('type' +" - of");

const isChecked = false,
      isClose = false;
console.log(isChecked && isClose);

console.log(2 + 2 * 2 === "8");


if (4 == 9) {
   console.log('Ok!');
} else{
   console.log('Error!');
}


if (num < 49) {
   console.log('Error');
} else if (num > 100){
   console.log('Too much');
} else{
   console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');*/

/*const num = '50';
switch (num) {
   case '49':
      console.log('Error');
      break;
   case '100':
      console.log('Error');
      break;
   case '50':
      console.log('Ok!');
      break;
   default:
      console.log('Not this time');
      break;
}

let num = 50;

/*while (num > 55) {
   console.log(num);
   num++;
}

do{
   console.log(num);
   num++;
}
while(num < 55);

for (let i = 1; i < 8; i++){
   if (i === 6){
      //break;
      continue;
   }
   console.log(i);
}


let num = 20;

function showFirstLetter (text){
   console.log(text);
   let num = 10;
   console.log(num);
}

showFirstLetter("Hello World!");
console.log(num);

function calc(a, b){
   return (a + b);
}

console.log(calc(2, 1));
console.log(calc(5, 8));
console.log(calc(1, 5));
console.log(calc(2, 3));
console.log(calc(9, 1));


function ret (){
   let num = 20;

      //

   return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
   console.log("Hello");
};
logger();

const calc = (a,b) => { 
   console.log('1');
   return a + b; 
};

const str = "Test";

console.log(str[0]);
console.log(str.toUpperCase());

const fruit = "Some fruit, that want pregnant lady";

console.log(fruit.indexOf("y"));

const logg = "Hello mofuckers, says one guy, somewhere";

console.log(logg.slice(-6, -1));

const num = 12.5;

console.log(Math.round(num));

const test = "12.5px";

console.log(parseFloat(test));


let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

//start();


const pesonalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};



function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         pesonalMovieDB.movies[a] = b;
         console.log('Done');
      } else {
         console.log('error');
         i--;
      }
   }
}
//rememberMyFilms();


function detectPersonalLevel() {

   if (pesonalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (pesonalMovieDB.count >= 30) {
      console.log("ВЫ киноман");
   } else {
      console.log("Error");
   }
}
//detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(pesonalMovieDB);
   }
}
//showMyDB(pesonalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      pesonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}
//writeYourGenres();

function first() {
   //Do something
   setTimeout(function () {
      console.log(1);
   }, 500);
}

function second() {
   console.log(2);
}

first();
second();

function learnJS(lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
}

function done() {
   console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);

const options = {
   name: 'Test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red',
   },
   makeTest: function () {
      console.log("Test");
   }
};

options.makeTest();

const {
   border,
   bg
} = options.colors;
console.log(border, bg);
//console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

//delete options.name;

//console.log(options);

let counter = 0;

for (let key in options) {
   if (typeof (options[key]) === 'object') {
      for (let i in options[key]) {
         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      }
   } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
   }
}

console.log(counter);

const arr = [1, 2, 3, 5, 9, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
   return a - b;
}

//arr[95]=7;
//console.log(arr.length);
//console.log(arr);

//arr.forEach(function(item, i, arr){
//   console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//arr.unshift(7);
//console.log(arr);

//for (let i = 0; i < arr.length; i++){
// console.log(arr[i]);
//}

//for (let u of arr){
//   console.log(u);
//}

//const str = prompt("","");
//const products = str.split(", ");
//products.sort();
//console.log(products.join('; '));

//let a = 5,
//b = b + a;

//console.log(b);
//console.log(a);

//const obj = {
 //  a: 5,
 //  b: 1
//};

//const copy = obj;

//copy.a = 10;

//console.log(copy);
//console.log(obj);

function copy(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key]; 
   }
   
   return objCopy;
}

const numbers = {
   a:2,
   b:5,
   c:{
      x: 7,
      y: 4
   }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
numbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
   d: 17,
   e: 20
};

console.log(Object.assign(numbers, add));

const test1 =  {
   a: 1,
   b: 2,
   c: {
      x: 5,
      y: 6
   }
};

const test2 = {
   d: 8,
   e: 10
};

const clone = Object.assign({}, test2);

clone.d = 21;

console.log(test2);
console.log(clone);

const oldArray = ['a', 'b', 'c' , 'v' , 'z', 'f', 'g'];
const newArray = oldArray.slice(0, 4);

newArray[1] = 'afasfdegrth';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c, d){
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(d);
}

const num = [2, 5, 7, 4];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
   one: 1,
   two: 2
};

const newQ = {...q};

//To String

console.log(typeof(String(3)));

console.log(4 + '');

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontsize = 26 + 'px';

// To Number

console.log(typeof(Number('test')));

console.log(typeof(+'text')); 

console.log(typeof(parseInt("10px", 10)));   

let answ = +prompt("Hello", "");

// To Boolean

let switcher = NaN;
if (switcher) {
   console.log("Working...");
}

switcher = 15;
if (switcher) {
   console.log("Working...");
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!'43535'));*/

let x = 5;

console.log(++x);

let y = x;

console.log(y);

console.log([] + false - null + false); 

let a = 1; 
let b = (a) = 2; 
console.log(b); 

console.log(typeof([] + 1 + 2));  //"1 + 2" => "12"  string

console.log("1"[0]);

console.log(2 && 1 && null && 0 && undefined);// Выведет null
//Оператор И(&&) запинается на лжи

console.log(!!(1 && 2) === (1 && 2));

let g = 1 && 5;
console.log(typeof(g)); 

console.log(null || 2 && 3 || 4); //Выведет 3
//А оператор ИЛИ (||) запинается на правде !!!

const q = [1, 2, 3];
const w = [1, 2, 3];
console.log(q == w);

console.log(+"Infinity");

console.log("Ежик" > "яблоко"); //Смотреть таблицу Unicode

console.log(0 || "" || 2 || undefined || true || false);

//                     DOM

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneItem = document.querySelector('.lists'),
    wrapper = document.querySelector('.wrapper');

// $('.box') in jQuery

    hearts.forEach(item => {
        console.log(item);
    });

    //box.style.backgroundColor = 'green';
    //box.style.width = '500px';

    //box.style.cssText = `background-color: black; width: ${num}`;

    buttons[1].style.borderRadius = '100%';
/*circles.style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'green';
}*/

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');
wrapper.append(div);

//wrapper.appendChild(div);
//wrapper.prepend(div);
//wrapper.insertBefore(div, hearts[1]);          Old Version
//hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();
//wrapper.removeChild(hearts[1]);                  Old Version
//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);     Old Version

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML('beforebegin', "<h2>Hello</h2>");    