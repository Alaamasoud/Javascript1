//1

let array = 
	["The-Fault-in-Our-Stars", "Legend", "Divergent", "Gone-with-the-Wind", "The-notebook", "Fallen", "The-Help", "Champion", "Fangirl", "Echos-Chance"];

// 3

function creatArray () {
  
  let container = document.createElement('section');
container.setAttribute('id', 'container');
container.style.padding='1%';
container.style.margin='1%';

let ul = document.createElement('ul');
ul.style.color = 'blue';
  
document.body.appendChild(container);
container.appendChild(ul);

for (let i = 0; i < array.length; i++) 
{
  let li = document.createElement('li');
   li.setAttribute('id', array[i]);

  ul.appendChild(li);
  li.innerHTML=li.innerHTML + array[i];
}
  return;
}

creatArray()
