
// variable declaration

var userName = "Haneel Kumar Nagineni"
console.log(`Name : ${userName}`);

var userID = 106120073
console.log(`userID : ${userID}`)

let herName = "Lahari Gudimella"
console.log(`Her name : ${herName}`);

let herID = 114119037
console.log(`herID : ${herID}`);

// constant declaration

const isStudent = false
console.log(`isStudent : ${isStudent}`)

// data types

let adminID = 4201
let Role = "Admin"
let isAdmin = true
let adminHierarchy = ["managers", "employees"]
let adminDetails = {
    id : adminID,
    Role : Role,
    Hierarchy: adminHierarchy
}

console.log(`typeOf adminID : ${typeof(adminID)}`)
console.log(`typeOf Role : ${typeof(Role)}`)
console.log(`typeOf isAdminv: ${typeof(isAdmin)}`)
console.log(`typeOf adminHierarchy : ${typeof(adminHierarchy)}`)
console.log(`typeOf adminDetails : ${typeof(adminDetails)}`)
console.log(Array.isArray(adminHierarchy));
console.log(Array.isArray(adminDetails));
