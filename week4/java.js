let myList = 'Make homework. Brush teeth. Buy a pony. Call my mother. Make a todo list.'
let first = myList.substr(0,13);
let second = myList.substr(14, 14);
let third = myList.substr(28, 10);
let fourth = myList.substr(38, 16);
let fifth = myList.substr(54, 18);

let ul = document.createElement('ul');
document.body.appendChild(ul);

let li = document.createElement('li');
ul.appendChild(li)

li.innerHTML = li.innerHTML + first;



