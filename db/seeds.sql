INSERT INTO department (id, name)
VALUES  (010, "Management"),
        (020, "HR"),
        (030, "Marketing"),
        (040, "IT"),
        (050, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES  (011, "Debarment Manager", 250000, 010),
        (012, "HR Supervisor", 18000, 020),
        (021, "Marketing Supervisor", 150000, 030),
        (022, "HR", 100000, 020),
        (031, "IT Advisor", 150000, 040),
        (032, "IT Engineer", 92000, 040),
        (041, "Sales Lead", 80000, 050),
        (042, "Sales Team", 50000, 050);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (111, "Sofie", "Lopez", 011,  1),
        (112, "Joe", "Jonas", 012, null ),
        (221, "Sam", "Smith", 021, null),
        (331, "Karina", "White", 032, 4),
        (441, "Olivia", "Doe", 041, 5),
        (442, "Ernesto", "Brown", 042, null);