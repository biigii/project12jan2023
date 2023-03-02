// alert(123456789);

// 'hello world'
// "this is a string"
// '1'
// 1
// 4500

// console.log('i am learning javascript');
// console.log(12345678)

// console.log(100+200);
// console.log('100'+'200');

// variable
var name = 'behshad';

var num1 = 200;
var num2 = 300;

var sum;
// const, let
num1 = 1000
sum = num1 + num2;
// console.log(sum);

// const tel = 0211234567
// let tel = 027788541

// my_awesome_class
// title casing  MyAwesomeVariable
// camel casing
let myAwesomeVariable
const myPhone = 123456789

// boolean true/false 0/1 on/off
const isNight = true;
const isCold = false;
const temp = 27;

// console.log(temp*3)

// list or array
const fruit1 = 'apple';
const fruit2 = 'orange';
const fruit3 = 'kiwi';

const fruits = ['apple', 'orange','kiwi'];
// console.log(fruits);

// console.log(window.document);
// const h1 = document.getElementById('heading')
// console.log(h1);
// document.getElementById('heading').style.color = 'red'
// document.getElementById('heading').style.backgroundColor = 'rgb(100, 200, 50)';
// document.getElementById('heading').style.border = '3px solid #000'

// const heading = document.getElementById('heading') 
// heading.style.color = '#f22'

document.querySelector('#heading').style.color = '#f66'
document.querySelector('.text').style.backgroundColor  = 'yellow'
document.querySelector('img').style.border = '20px solid #f99'
document.querySelector('h1').style.fontSize = '5em'
document.querySelector('img').setAttribute('alt','my awesome photo');
document.querySelector('.text').setAttribute('id', 'txt')
document.querySelector('#heading').removeAttribute('class');

// document.querySelector('body')
document.body.classList.add('homepage')
// document.body.classList = 'home page'
// document.body.className = 'home'

const h2 = document.createElement('h2');
h2.textContent = 'hello world'
// h2.innerHTML = 'hello world again'
document.body.append(h2)