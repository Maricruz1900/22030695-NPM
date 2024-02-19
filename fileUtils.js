import fs from 'fs'

export function readFile (JsonPath){
    try{
        const jsonData = fs.readFileSync(JsonPath)
        const data = JSON.parse(jsonData)
        return data
    }
    catch(error){
        console.log(error)
    }
} 

//console.log(readjson("books.json"))

export function updateFile (JsonPath, newData){
    try{
        const Jsondata = fs.readFileSync(JsonPath)
        const data = JSON.stringify(newData)
        const newJson = fs.writeFileSync(JsonPath, data)
        return newJson
    }
    catch(error){
        console.log(error)
    }
}




//FS: FILE SYSTEM
//PARSE LO CONVIRTE A JSON


// const sum = (n1, n2) =>  console.log(parseInt(n1)+parseInt(n2))
// const subtraction = (n1, n2) =>  console.log(parseInt(n1)-parseInt(n2))

// const newArgs = process.argv.slice(2)
// console.log(newArgs)

// const n1= newArgs[1]
// const n2= newArgs[2]

// if (newArgs[0] === "sum"){
//     sum(n1,n2)
// } 

// if (newArgs[0] === "subtraction") {
//     subtraction(n1,n2)
// }//