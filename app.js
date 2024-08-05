const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');

let countdown = new Date("Aug 16, 2024 00:00:00").getTime();
var x = setInterval(()=>{
let now = new Date().getTime();
let distance = countdown - now ;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

day.innerHTML = days
hour.innerHTML = hours
minute.innerHTML = minutes
second.innerHTML = seconds

},1000)