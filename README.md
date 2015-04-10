# random-SQL-Gen
Creates lines of code to seed a database with random varchars &amp; integers using node-sqlite3.
##Input:
To run the program, type
`$node datagen.js <TABLENAME> <NUMBER OF LINES TO GENERATE> <header1> <datatype (varchar/integer)>, ...`

###Example:

```bash
$ node datagen.js table2 5 name varchar, age integer 30 40

You asked for 5 line(s) to be generated for table2 containing:
name varchar, age integer 30 40
db.run("INSERT INTO table2 (name, age) VALUES ('rub', 36);");
db.run("INSERT INTO table2 (name, age) VALUES ('fang', 31);");
db.run("INSERT INTO table2 (name, age) VALUES ('tomatoes', 38);");
db.run("INSERT INTO table2 (name, age) VALUES ('talk', 39);");
db.run("INSERT INTO table2 (name, age) VALUES ('language', 37);");
DONE
```

Program will throw you an error if you format your data incorrectly.
