import Express from "express";
import fs from "fs";

//defining port
const App = Express();
const port = 3010;

//reading file contents
let fileContents = fs.readFileSync("database.json")

//converting file to json
let database = JSON.parse(fileContents);

//getting names of each employee
App.get('employees/:name', (req, res) => {
    //error message
    let result = {"error": "Not found"};

    //if name is in the database
    database.forEach((value) => {
        if(req.params.name == value.name) {
            result = value;
        }
    });
    res.json(result);
})

//get ages of employees
App.get('/ages/:number', (req, res) => {
    //error message
    let result = {"error": "Not found"};

    //if age matches an employee age
    database.forEach((value) => {
        if(req.params.age == value.age) {
            result = value;
        }
    });
    res.json(result);
})

//listening on port defined
App.listen(port, () => {
    console.log("Server runing!");
});