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

// 4

let myFavBooks = {
  
  book1:{
  id:"theFaultInOurStars",
  language:"English",
  Author:"John Green"
},

  book2:{
  id:"legend",
  language:"English",
  Author:"Marie Lu"
},
  
  book3:{
  id:"divergent",
  language:"English",
  Author:"Veronica Roth"
},
  
    book4:{
  id:"goneWithTheWind",
  language:"English",
  Author:"Margaret Mitchell"
},

  book5:{
  id:"theNotebook",
  language:"English",
  Author:"Nicholas Sparks"
},
  
  book6:{
  id:"fallen",
  language:"English",
  Author:"Lauren Kate"
},
  
    book7:{
  id:"theHelp",
  language:"English",
  Author:"Kathryn Stockett"
},

  book8:{
  id:"champion",
  language:"English",
  Author:"Marie Lu"
},
  
  book9:{
  id:"fanGirl",
  language:"English",
  Author:"Rainbow Rowell"
},
  
    book10:{
  id:"echosChance",
  language:"English",
  Author:"M.A. Drake"
}

}


function creatInfo(){
  
  let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
container.style.width= '90%';
container.style.margin='auto';
container.style.paddingLeft = '15%';  
  
  
  
  
  for (i in myFavBooks){
  console.log(myFavBooks[i].id);
    
let myShelf = document.createElement('ul');
container.appendChild(myShelf); 
myShelf.style.listStyleType = 'none'; 
myShelf.style.float= 'left';
myShelf.style.marginRight='1vw';   
myShelf.setAttribute('id', myFavBooks[i].id)    
    
    
let myList = document.createElement('li');
myShelf.appendChild(myList);
myShelf.style.width="30%";
myShelf.style.border="1px solid blue";
let myHeader = document.createElement('h3');
myHeader.style.color= 'blue';
myList.appendChild(myHeader);  
myHeader.innerHTML = myHeader.innerHTML +  myFavBooks[i].id
    

let myLang = document.createElement('li');
myShelf.appendChild(myLang);
myLang.innerHTML = myLang.innerHTML +  myFavBooks[i].language 
    
    
let myAuthor = document.createElement('li');
myShelf.appendChild(myAuthor);
myAuthor.innerHTML = myAuthor.innerHTML +  myFavBooks[i].Author    
    
  }

  return;
}

creatInfo();


//7

let myCoverPhoto = {
  theFaultInOurStars: './image/The-Fault-in-Our-Stars.jpg',
  legend : './image/legend.jpg',
  divergent : './image/divergent.jpg',
  goneWithTheWind : './image/Gone_with_the_Wind_cover.jpg',
  theNotebook :  './image/nothebook.jpg',
  fallen :  './image/fallen.jpg',
  theHelp :  './image/thehelp.jpg',
  champion :  './image/champion.jpg',
  fanGirl :  './image/fangirl.jpg',
  echosChance :  './image/Echos-Chance.jpg'
}

let creatCover = Object.keys(myCoverPhoto)

function addCover() {
  
  for (i of creatCover){
    let img = document.createElement('img');
    img.style.width = '50%';
    img.style.display = 'block';
    img.style.margin = 'auto';
    img.setAttribute('src', myCoverPhoto[i]);
    document.getElementById(i).appendChild(img);
    
  } return;
}

addCover()


