const test = ["TestName1 test1", "TestName2 test2"];
test.map((item) => item.split(" ")[1]);

//Після маніпуляцій з масивом через map - він саме створює новий масив в який записує результат функції
//після обробки, а не повертає посилання на старий масив test і записує в нього результати.
const test = ["TestName1 test1", "TestName2 test2"];
function modifiedArray(someArray){
const modifiedArray = someArray.map((item) => item.split(" ")[1]);
return modifiedArray;
}
modifiedArray(test);




const test = ["TestName1 test1", "TestName2 test2"];
const modifiedTestArray = [...test];//shallow copy by using a spread operator
function selectOnlySecondItemInTheArray(someArray) {
someArray.forEach((item, index) => {
const newArray = item.split(" ")[1];
someArray[index] = newArray;
})
return someArray;
}
selectOnlySecondItemInTheArray(modifiedTestArray);

const test = ["TestName1 test1", "TestName2 test2"];
const modifiedTestArray = structuredClone(test);//deep copy by using of structuredClone function
//in JavaScript
function selectOnlySecondItemInTheArray(someArray) {
someArray.forEach((item, index) => {
const newArray = item.split(" ")[1];
someArray[index] = newArray;
})
return someArray;
}
selectOnlySecondItemInTheArray(modifiedTestArray);


const obj1 = {
name: "test1",
familyName: "test2"
}
obj2 = {...obj1}
obj2.name = "newName"
console.log(obj1.name)
console.log(obj2.name)


const users = [
{
userName: 'Alex',
age: 28
},
{
userName: 'Oleksiy',
age: 37
},
{
userName: 'Test',
age: 17
}
];

//Filter users, whose age is more, than 18
const adultUsers = users.filter(function(item) {
return item.age > 18
});
console.log(adultUsers);

//Return summary of all users age in the massive
const usersAgeSummary = users.reduce(function(accumulator, currentValue) {
return accumulator + currentValue.age
}, 0);
console.log(usersAgeSummary);


//True, if age of every user is more, than 16
const foundObj = users.every(function(item) {
return item.age > 16;
})
console.log(foundObj);

//------------------------------------------------------------------------------------
const users = [
{
name: "test1",
familyName: "familyName1",
age: "17"
},
{
name: "test2",
familyName: "familyName2",
age: "19"
}
]

const filteredArray = users.filter(function(item) {
return item.age > 18;
})

const filteredArray2 = users.filter(function(item) {
return item.name === "test1";
})

const foundObj = users.findIndex(function(item) {
return item.name === "test2"
})

//^^ These functions will return new array, not the one we used.

console.log(filteredArray)
console.log(filteredArray2)
console.log(foundObj)
console.log(users)




const numbers = [1,2,3,5,3,7,8,20]

function quantity(numbersArr, number) {
let counter = 0;
for (item of numbersArr) {
if (item === number) {
counter ++;
}
}
return counter > 0 ? counter : "Даного числа немає в масиві"
}

quantity(numbers, 8);


let familyName = "testFamilyName"

function sayYo() {
let name = "test"

return function () {
console.log("Yo " + name)
console.log("Yo " + familyName)
}
}
sayYo()();


const objWithMethod = {
make: "Toyota",
drive: function() {
console.log("Engine powered")
}
}

const copiedObjWithMethod = structuredClone(objWithMethod);//does not work


copiedObjWithMethod.drive();


function returnsObj(car) {
if (car === "Toyota") {
return {
make: "Toyota",
model: "Rav4",
year: "2023"
}
} else if (car === "Volkswagen") {
return {
make: "Volkswagen",
model: "Touareg",
year: "2019"
}
} else {
return
{
message: "Car not found"
}
}
}

function logCarData(carData) {
console.log(carData.make)
console.log(carData.model)
console.log(carData.year)
carData.message ? console.log(carData.message) : console.log("")
}

logCarData(returnsObj("Toyota"));
