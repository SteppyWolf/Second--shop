$(function () {
   $('.carousel').carousel({
      interval: false
   });

   $('.search').on('click', function () {
      $('.navbar-form').slideToggle();
   });
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

//alert('Please read this, before you click on button');

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

//const result = confirm("Are you alive?");
//console.log(result);

//const answer = prompt('Do You have 18', 'Enter your age');
//console.log(typeof(answer));

/*const answers = [];

answers[0] = prompt('Как ваша фамилия?', '');
answers[1] = prompt('Как ваше имя?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));
document.write(answers);*/

const category = 'toys';
console.log(`https://someurl.com/${category}/boys/6`);

const user = "Petr";
alert(`Hello, ${user}`);

console.log('type' +" - of");

const isChecked = false,
      isClose = false;
console.log(isChecked && isClose);

console.log(2 + 2 * 2 === "8");