const inquirer = require("inquirer");
const db = require("/db/connection.js");
const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const { response } = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database

// TODO: Create an array of prompt for user input
function init() {
  console.table("");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "title",
        choices: [
          { name: "View all employees?", value: "View employees?" },
          { name: "Add employee?", value: "Add employee?" },
          { name: "Update employee role?", value: "Update employee role?" },
          { name: "View all roles?", value: "View all roles?" },
          { name: "Add role?", value: "Add role?" },
          { name: "View all department?", value: "View all department?" },
          { name: "Add department?", value: "Add department?" },
          { name: "Remove department?", value: "Remove department?" },
          { name: "View total budget by department?",value: "View total budget by department?",},
          { name: "quit?", value: "quit?" },
        ],
      },
    ])
    .then((response) => {
      let choice = response.title;
      switch (choice) {
        case "View employees?": {
          viewEmployee();
          break;
        }

        case "Add employee?": {
          addEmployee();
          break;
        }

        case "Update employee role?": {
          updateEmployeeRole();
          break;
        }

        case "View all roles?": {
          viewAllRoles();
          break;
        }

        case "Add role?": {
          addRole();
          break;
        }

        case "View all departments?": {
          viewAllDepartment();
          break;
        }

        case "Add department?": {
          addDepartment();
          break;
        }

        case "Remove department":{
          removeDepartment();
          break;
        }

        case "View total budget by department?":{
          viewTotalBudgetByDepartment()
          break;
        }

        case "Quit?": {
          console.log("quit?");
          break;
        }
      }
      init();
    });
}

function viewEmployee() {
  console.log("I'm happy to help!");
  db.query("SELECT * FROM employees", function (err, results) {
    if (err) throw err;
    console.table(results);
  });
  }

  function viewAllRoles() {
    console.log("I'm happy to help!");
    db.query("SELECT * FROM role", function (err, results) {
      if (err) throw err;
      console.table(results);
    });
    }

    function viewAllDepartment() {
      console.log("I'm happy to help!");
      db.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
      });
      }


  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the employee's first name:",
          name: "firstName",
        },
        {
          type: "input",
          message: "Enter the employee's last name:",
          name: "lastName",
        },
        {
          type: "input",
          message: "Enter the employee's role ID:",
          name: "roleId",
        },
        {
          type: "input",
          message: "Enter the employee's manager ID:",
          name: "managerId",
        },
      ])
      .then((employee) => {
        // Add the employee to the database here
        console.log(`Employee ${employee.firstName} ${employee.lastName} added successfully.`);
        init();
      });

      function addEmployee() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter the employee's first name:",
              name: "firstName",
            },
            {
              type: "input",
              message: "Enter the employee's last name:",
              name: "lastName",
            },
          ])
          .then((answers) => {
            console.log(`Employee's first name: ${answers.firstName}`);
            console.log(`Employee's last name: ${answers.lastName}`);
          });
      }
  }
  
// Function call to initialize app
init();