// INTERMEDIATE EX.1 ----------------------------------------

// var cars = ["Tesla", "Audi", "Reanault", "Volvo", "Mazda", "Fiat", "Ferrari"];

// console.log(cars.sort());

var fruits = ["apple", "banana", "kiwi"];

fruits.push("orange");

console.log(fruits);

fruits.pop();

console.log(fruits);



// INTERMEDIATE EX.2 -----------------------------------

var animals =["monkey", "horse", "dog"], x=0, y=2;
console.log(animals);


// INTERMEDIATE 2 SOLUTION 1 ---------------------------   

// animals[x] = animals.splice(y, 1, animals[x])[0];
// console.log(animals); 
// animals.unshift("cat");
// console.log(animals);

// End ----INTERMEDIATE 2 SOLUTION 1 
// INTERMEDIATE 2 SOLUTION 2       ----------------------

// var a = animals[2];
// var b = animals [0];
// animals= [a, animals[1], b];

// console.log(animals);

// animals.unshift("cat");

// console.log(animals);

//End ----INTERMEDIATE 2 SOLUTION 2


// INTERMEDIATE 2 SOLUTION 3 -----------------------------

// var a = animals[2];
// var b = animals [0];
// animals= [animals[2], animals[1], animals[0]];
// console.log(animals);

// animals.unshift("cat");
// console.log(animals);

// End ----INTERMEDIATE 2 SOLUTION 3
// INTERMEDIATE 2 SOLUTION 4 ------------------------------


animals.pop();
animals.shift();

// console.log(animals);

animals.push("monkey");
animals.unshift("dog");
console.log(animals);

animals.unshift("cat");

console.log(animals);


// End ----INTERMEDIATE 2 SOLUTION 4


// INTERMEDIATE EX.3-----------------------------------------

var fruits2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

document.write(fruits2.split("/").join("<br>"));

