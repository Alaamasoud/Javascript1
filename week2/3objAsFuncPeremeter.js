function myClub(realMadrid){


  for (let position in realMadrid){
    console.log(position +"  "+ realMadrid[position]);

  }
  return
}


let realMadrid = {
  
  team: "realmadrid",
  keeper: "Navas",
  defence:"Ramos",
  midfield:"Luka",
  attack:"Ronaldo"
}

myClub(realMadrid);
