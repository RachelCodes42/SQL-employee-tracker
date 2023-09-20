# SQL Employee Tracker

## Description
Developers often need to create interfaces for non-developers to efficiently view and interact with information stored in databases. These interfaces are commonly referred to as Content Management Systems (CMS). This command-line application, built using Node.js, Inquirer, and MySQL, allows business owners to easily manage their company's employee database. With this tool, users can view and manage departments, roles, and employees, enabling efficient organization and planning of their business operations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<!-- Add installation instructions here -->
To use this application, follow the steps below:

1. Clone the Repository: 
git clone <repository-url>
cd employee-database-cli

2. Install Dependencies: npm install

3. Set Up the MySQL Database: Make sure you have MySQL installed and running on your system. Create an '.env' file in the project root directory with the following environment variables:
DB_HOST=localhost
DB_PORT=3306
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_DATABASE=employee_db

Replace your-mysql-username and your-mysql-password with your MySQL credentials. Create the database by running the following SQL script:
CREATE DATABASE IF NOT EXISTS employee_db;

Create tables by running the SQL script in the db directory:
mysql -u your-mysql-username -p employee_db < db/schema.sql

Seed initial data (optional):
mysql -u your-mysql-username -p employee_db < db/seeds.sql

4. Start the Application: npm start

## Usage
<!-- Add usage information here -->
1. Upon starting the application, you will be presented with a menu of options:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Exit

2. Select the desired action by entering the corresponding number or using arrow keys.

Viewing Departments, Roles, and Employees
When choosing to view departments, a formatted table displaying department names and IDs will be presented.
When choosing to view roles, a table with job titles, role IDs, associated departments, and salaries will be displayed.
When selecting to view employees, you will see a table with employee data, including IDs, first names, last names, job titles, departments, salaries, and their respective managers.

Adding Data
When opting to add a department, you will be prompted to enter the name of the department, and it will be added to the database.
To add a role, provide the role's name, salary, and the associated department.
When adding an employee, enter the employee's first name, last name, role, and manager. The employee will be added to the database.

Updating Employee Roles
To update an employee's role, you will be guided through selecting an employee to update and specifying their new role.

## License
<!-- Add license badge and explanation here -->
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(http://opensource.org/licenses/MIT)

## Contributing
<!-- Add contribution guidelines here -->
Node.js, Inquirer, and MySQL

## Tests
<!-- Add test instructions here -->
N/A

## Questions
GitHub: [Your GitHub Profile](https://github.com/RachelCodes42)
Email: hochman.rachel@gmail.com
  