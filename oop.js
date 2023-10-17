// let names = {
//     fname: "sanny",
//     lname: "kipsang"
// }
// console.log(names);
// console.log(names.hasOwnProperty("mname"));



// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }

//     area(){
//         return this.sideLength * this.sideLength;
//     }
// }

// const square = new Square(5);
// // console.log(square);
// // console.log(square.sideLength);
// console.log(square.area());

// class Fish {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const oldFish = new Fish("Dolfin", 3);
// console.log(oldFish);

// class Vehicle {
//     color;
//     model;
//     fuel;
// }

// let audi = new Vehicle();

// audi.color = "black"
// console.log(audi);

// class Transaction {
//     construcor(amount, date, memo) {
//         this.amount = amount;
//         this.date = date;
//         this.memo = memo;
//     }
// }

// const transaction = new Transaction(100, "16/10/2023", "Grocery shopping");
// // transaction.amount;
// // transaction.date;
// // transaction.memo;

// console.log(transaction);


// console.log('first');
// for(let i = 0; i<=12; i++){
//     console.log('taking a lot of time');
// }
// console.log('second');
// console.log('thurd');

               //PROMISES
// function decideAge(age) {
//     return new Promise ((resolve, reject) => {
//         if(age>=18) {
//             resolve('this is an adult')
//          }
//          else{
//             reject("a kid")
//         }
//     })
// }
// decideAge(1).then(res => {
//             console.log(res)
//         }).catch((err) => {
//             console.log(err)
//         })


// function takesTime(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('hey after 3 sec')
//         }, 3000)
//     })
// }

// async function functionCaller(){
//     let result = await takesTime();
//     console.log(result);
// }

// functionCalG er()

                    //  INITIALIZING INSTANCES

// class Breakfast {
//     constructor(food, drink) {
//         this.food = food,
//         this.drink = drink
//     }
// }

// let food1 = new Breakfast("ban", "coffee")
// let food2 = new Breakfast("apple", "kericho tea")
// console.log(food1);
// console.log(food2);


// class Dinner {
//     #dessert;
//     constructor(salad, soup, entree, dessert) {
//         this.salad = salad;
//         this.soup = soup;
//         this.entree = entree;
//         this.#dessert = dessert;
//     }
// }

// let firstDinner = new Dinner('salad', 'beef soup', 'entree', 'dessert');
// console.log(firstDinner);


