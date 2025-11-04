/*

    For Each

*/

const users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Mike", age: 35, city: "Chicago" },
    { name: "Emily", age: 28, city: "Houston" }
]

users.forEach(element => {
    console.log(`${element.name}, ${element.age}, ${element.city}`)
});