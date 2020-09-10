$(function () {
   $('.carousel').carousel({
      interval: 2000
   });

   $('.search').on('click', function () {
      $('.navbar-form').slideToggle();
   });

   $('#elastislide').elastislide();

   $.elastislide.defaults = {
      speed: 600,
      easing: 'ease-in-out',
   };
});

$(window).load(function(){
   let carouselCaptionWidth = $('#carousel-sidebar .active img').width();
   $('#carousel-sidebar img').each(function(){
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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const pesonalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++){
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?','');

   if (a != null && b != null && a != '' && b != '' && a.length < 50){
      pesonalMovieDB.movies[a] = b;
      console.log('Done');
   } else{
      console.log('error');
      i--;
   }
}

if (pesonalMovieDB.count < 10){
   console.log("Просмотрено довольно мало фильмов");
} else if(pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30){
   console.log("Вы классический зритель");
} else if (pesonalMovieDB.count >= 30){
   console.log("ВЫ киноман");
} else{
   console.log("Error");
}

console.log(pesonalMovieDB);
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
console.log(calc(9, 1));*/


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