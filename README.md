# labseps

## Goals

* Work on mobile phones > work on desktops.
* Provide a website with info on which labs are free at the moment.
* Allow users to check for availability at any time in the future.
* Allow users to check for the next available slot of time in a room.
* Provide info on room resources.
* Provide info about scheduled classes/labs. Link to EPS homepage.
* **Bonus:** build a WhatsApp bot.

## Structure

* A web scrapper that parses data available at http://eps.uam.es and stores it in a database.
* A web server that queries the database and returns information to the user.
* A database that stores all data.

## The Web Scrapper

Data is available by browsing to http://eps.uam.es > Estudios > [Select major] > [Select Horarios on the sidebar] > [Select year on the sidebar]. A couple of tables are shown: one per group and semester. Tables adhere to the following structure:
* Tables are wrapped inside a `div.tabla_horario`. Each of theese contains:
  * An `h1` tag containing the string `Primer Cuatrimestre|Segundo Cuatrimestre`.
  * An `h2` tag containing the string `Grupo [0-9]`. This is not used as the group is already specified in an the time lot detail and can vary even under the same timetable.
  * The actual `table.tabladatos` tag with the schedule info.
* Each `table.tabladatos` contains:
  * A header row of multiple `th` cells inside a `thead` wrapper (good semantics!). They always have the same number of columns: `Hora, Lunes, Martes, Miércoles, Jueves, Viernes`
  * Multiple *time slot* rows each containing:
    * A `th.celda_hora` cell which contains the start and end times of the time slot in the format `start<br>end`.
    * Multiple `td` cells each containing a link with a JS `onlick` handler and the *course code* as the text. The `onclick` handler is a function call with 4 arguments: `course_id, start_time, end_time, day_of_week`. The function opens a small window that loads a webpage (a.k.a. the slot detail) with further information on the course.
* The **slot detail** webpage is another table tagged `table.tabladatos`. The rows are key-value pairs.
  * The first cell is always a `th` cell which contains the key. The following keys are known: `Asignatura, Grupo, Profesores, Hora, Día, Aula`.
  * The other cell is a `td` cell with the value asociated with the key in the previous cell. Formats vary.

### Consistency issues

* Sometimes there are multiple comma-separated values for the *Profesores* key in the time slot detail table.
* Sometimes there are multiple comma-separated or new-line-separated values for the *Aula* key in the time slot detail table.
* There is a non-existing room: *Pendiente de asignar*. These entries should not end up in the database.
* There is a non-existing professor: *Pendiente de asignar*. These should not end up in the database either.

## The Data Model

We have settled on a relational data model with two main realtions: `Classes`
and `Rooms`. To represent entities in code we adhere to the repository pattern
as much as possible. There is one entity class and one repository class per
each relation.

### Rooms

Field name  | Field Type   | Source
----------- | ------------ | -------
id          | integer      | Auto increment
name        | string       | *Aula* in time slot detail


### Classes

Field name  | Field Type   | Source
----------- | ------------ | -------
short_name  | string       | Content of the `td` element in the main table
semester    | integer      | Content of the `h1` element in the main table
code        | string       | `onclick` handler first argument
starts_at   | string       | `onclick` handler second argument
ends_at     | string       | `onclick` handler third arguement
day_of_week | integer      | `onclick` handler fourth argument
course_name | string       | *Asignatura* in time slot detail
group       | string       | *Grupo* in time slot detail
professors  | string       | *Profesores* in time slot detail
room_id     | integer      | *Aula* in time slot detail

The database can be initialized by running `db_init.py`. For now, this script
deletes any previous database and initializes a new one. No migrations have
been implemented as this database is not the primary source for the data.
