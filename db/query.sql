/*----- Join Statement to select values shown in employee table -----*/
SELECT employee.id, employee.first_name, employee.last_name, title, name AS department, role.salary 
FROM employee 
JOIN role ON employee.role_id = role.id 
JOIN department ON role.department_id = department.id