let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: "Marta",
  lastName: "Silva",
  age: "34",
  medals: {
    golden: 2,
    silver: 3,
  }
}
p = [8, 7, 8];
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " de idade.");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player.bestInTheWorld[3]);

console.log("A jogadora" + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes");
