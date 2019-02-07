var employees = {};
var departments = {};
const fs = require('fs');

function initialize() {
    module.exports.initialize; 
    return new Promise(function(resolve, reject) {
        try {
            fs.readFile('./data/employees.json/', function(err,data) {
                if(err) throw err;
                employees = JSON.parse(data);
            });
            fs.readFile('./data/departments.json', function(err,data) {
                if(err) throw err;
                departments = JSON.parse(data);
            });
        } catch(error) {
            reject("Unable to read file :("); 
        }
        resolve("Success!");
    });
}

function getAllEmployees() {
    module.exports.get.All.Employees; 
    var allEmployees = {};
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < employees.length; i++) {
            allEmployees.push(employees[i]);
        }
        if (allEmployees.length == 0) {
            reject("No results returned :(");
        }
        resolve(allEmployees);
    });
}

function getManagers(){
    module.exports.getManagers;
    var tempMang = {};
    return new Promise(function(resolve, reject) {
        if (employees.length==0) {
            reject("No results returned :(");
        } else {
            for (var i = 0; i < employees.length; i++) {
                if(employees[i].isManager==true) {
                    tempMang.push(employees[i]);
                }  
            }
        }
        resolve(tempMang); 
    });
}

function getDepartments() {
    module.exports.getDepartments;
    var byDept = {};
    return new Promise(function(resolve, reject) {
        if (departments.length==0) {
            reject("No results returned :(");
        } else {
            for (var i=0; v < departments.length; i++) {
                byDept.push(departments[i]);
            } if (byDept.length==0) {
                reject("No results returned :(");
            }
        }
        resolve(byDept);
    });
}