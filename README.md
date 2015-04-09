# random-SQL-Gen
Creates lines of code to seed a database with random varchars &amp; integers using node-sqlite3.
##Input:
To run the program, type
`$node datagen.js <TABLENAME> <NUMBER OF LINES TO GENERATE> <header1> <datatype (varchar/integer)>, ...`

###Example:

```bash

$ node datagen.js table2 5 name varchar, age integer

You asked for 5 line(s) to be generated for table2 containing:
name varchar, age integer
db.run("INSERT INTO table2 (name, age) VALUES ('passenger', 64);");
db.run("INSERT INTO table2 (name, age) VALUES ('lunchroom', 79);");
db.run("INSERT INTO table2 (name, age) VALUES ('vacation', 17);");
db.run("INSERT INTO table2 (name, age) VALUES ('eggnog', 14);");
db.run("INSERT INTO table2 (name, age) VALUES ('verse', 79);");
DONE


```


**Version 1.00000000001, currently no error checking!!**
