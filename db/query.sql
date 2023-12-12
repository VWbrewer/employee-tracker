SELECT * FROM department;
SELECT * FROM role;
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.department_id, role.salary, employee.manager_id
FROM employee
INNER JOIN role ON employee.role_id=role.id;