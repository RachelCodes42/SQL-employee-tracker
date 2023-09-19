/*----- Seeds added to SQL DB by table -----*/

INSERT INTO department (name)
VALUES
    ('Marketing'),
    ('Finance'),
    ('Operations');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Marketing Manager', 70000, 1),
    ('Financial Analyst', 55000, 2),
    ('Operations Supervisor', 48000, 3),
    ('Sales Representative', 40000, 1),
    ('HR Specialist', 62000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Alice', 'Johnson', 1, NULL),
    ('David', 'Miller', 2, 1),
    ('Emily', 'Garcia', 3, NULL),
    ('Michael', 'Brown', 4, 3),
    ('Sophia', 'Martinez', 5, NULL);
