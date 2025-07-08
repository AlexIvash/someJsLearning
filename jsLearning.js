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