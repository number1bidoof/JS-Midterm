// Snipet 1
console.log("Hello World");
let cat = "Cat" //let is the most common, it can be changed
const dog = "Dog" //const is short for constant, it cannot be changed throguhout the code
var bunny = "Bunny" //var is legacy and is not used commonly, avoid using it unless with older browsers
console.log(`Sarah own a ${cat}`);
console.log(`John owns a ${dog}`);
console.log(`David owns a ${bunny}`);
console.log(`Addison owns all three, a ${cat}, ${dog} and a ${bunny}`);
cat = "Fish";
//dog = "Horse" gives a type error, const cannot be set to another value
bunny = "Parrot";
console.log(`Ryan own a ${cat}`);
console.log(`Eric owns a ${dog}`);
console.log(`Mary owns a ${bunny}`);
console.log(`Heather owns all three, a ${cat}, ${dog} and a ${bunny}`);
//Snipet 2
document.getElementById("myName").innerHTML = "my name is Ayah"
document.getElementById("myName2").textContent = "my name is Lumpus"
//Snipet 3
window.alert("This is my midterm practice :p")
favColor = prompt("What is your favorite color?:")
document.body.style.backgroundColor = favColor;
//Snipet 4
const newh1 = document.createElement('h1')
favIceCreamFlav = prompt("What is your favorite ice cream flavor")
document.body.appendChild(newh1)
newh1.innerHTML = favIceCreamFlav
newh1.style.backgroundColor = "PaleGreen"
document.body.style.backgroundColor = "SkyBlue"
