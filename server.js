const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const fs = require('fs')



const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
  host: 'localhost',  
  database: 'business_db',
  user: 'root',
  password: 'SchoolThis12!',
  },
  console.log(`Connected`)
);



 function start () {
    inquirer
    .prompt([
       {
        name: "initRequest",
        type: "list",
        message: "Select a option type", 
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a new department",
            "Add a new role",
            "Add a new employee",
            "Update an employee's role",
            "View Employees by Manager",
            "View Employees by Department",
            "Delete Departments | Roles | Employees",
            "View the total utilized budget of a department",
            "Exit",
        ]
       } 
    ])
    

    .then((answer) => {
        switch(answer.initRequest){
            case "View all departments":
              displyDeptT();
            break;
            case "View all roles": 
              displayRoleT();
            break;
            case "View all employees":           
              displayEmpT();    
            break;
            case "Add a new department":
              newDeptQ();
            break;    

            case "Add a new role"
            newRole();
            break;

            default:
            console.log("Error");   

        }
      

        
    });

  } ;



//New Role
const newRole = () => {
  inquirer
    .prompt([
       {
         name: "newRole",
         type: "input",
         message: "What is the name of the new Role you'd like to add?", 
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salry for this role?", 
     }, 
      {
        name: "department",
        type: "list",
        message: "What department will this role belong to?",
        choices:[
            "Marketing",
            "Events",
            "Engineering",
            "Community",
            "Sales",
            "HR"

        ] 
    }, 

           ])
           .then((answer) => {
            switch(answer.department){
            case "Marketing":
            }




            const sqlNewRole = `INSERT INTO role(id, title, salary, department_id) VALUES (43, "${answer.newRole}", ${answer.salary}, 010);`;
            db.query(sqlNewDept, (err, res) => {
            if (err) {
            console.log(err)
            return;
           }
            displyDeptT()
            console.log(answer.newDep)
           });
});
};






//New Department 

const newDeptQ = () => {
  inquirer
    .prompt([
       {
         name: "newDep",
         type: "input",
         message: "What is the name of the new Department you'd like to add?", 
      }
           ])
           .then((answer) => {

            const sqlNewDept = `INSERT INTO department (id, department_name) VALUES (999, "${answer.newDep}")`;
            db.query(sqlNewDept, (err, res) => {
            if (err) {
            console.log(err)
            return;
           }
            displyDeptT()
            console.log(answer.newDep)
           });
});
};




// Department Table
function displyDeptT() {
  const sqlDept = `SELECT * FROM department`;
  db.query(sqlDept, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    console.table(res)
    }); 

};

// Role Table
function displayRoleT() {
  const sqlRole = `SELECT * FROM role`;
  db.query(sqlRole, (err, res) => {
    if (err) {
    res.status(500).json({ error: err.message });
    return;
          }
    console.table(res)
    //start()
    });    
};

// Employee Table

function displayEmpT() {
const sqlEmp = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.department_id, role.salary, employee.manager_id FROM employee INNER JOIN role ON employee.role_id=role.id;`;
db.query(sqlEmp, (err, res) => {
    if (err) {
    res.status(500).json({ error: err.message });
    return;
    }
    console.table(res)
    //start()
    });    
};

  //Add new dept

startQ();