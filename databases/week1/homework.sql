-- Task 1 Find out how many tasks are in the task table
SELECT 
  COUNT(*) AS "Tasks in total"
FROM 
  task;

-- Task 2 Find out how many tasks in the task table do not have a valid due date
SELECT 
  COUNT(*) AS "Tasks in total"
FROM 
  task 
WHERE 
  due_date IS NULL;

-- Task 3 Find all the tasks that are marked as done
SELECT 
  task.id AS "Done task id", 
  task.title "Task id", 
  task.description AS "Task description"
FROM 
  task 
  JOIN status ON status.id = task.status_id 
WHERE 
  status.name = 'DONE';

-- Task 4 Find all the tasks that are not marked as done
SELECT 
  task.id AS "Task id", 
  task.title AS "Task title", 
  task.description AS "Task description", 
  status.name AS "Status"
FROM 
  task 
  JOIN status ON status.id = task.status_id 
WHERE 
  status.name != 'DONE';

-- Task 5 Get all the tasks, sorted with the most recently created first
SELECT 
  * 
FROM 
  task 
ORDER BY 
  created DESC;

-- Task 6 Get the single most recently created task
SELECT 
  * 
FROM 
  task 
ORDER BY 
  created DESC 
LIMIT 
  1;

-- Task 7 Get the title and due date of all tasks where the title or description contains database
SELECT 
  title, 
  description, 
  due_date 
FROM 
  task 
WHERE 
  title LIKE "%database%" 
  OR description LIKE "%database%";

-- Task 8 Get the title and status (as text) of all tasks
SELECT 
  task.title, 
  status.name 
FROM 
  task 
  JOIN status ON task.status_id = status.id;

-- Task 9 Get the name of each status, along with a count of how many tasks have that status
SELECT 
  status.name AS "Status", 
  count(task.id) AS "Tasks in total"
FROM 
  status 
  JOIN task ON status.id = task.status_id 
GROUP BY 
  status.name;
  
-- Task 10 Get the names of all statuses, sorted by the status with most tasks first
SELECT 
  status.name AS "Status", 
  count(task.id) AS "Tasks in total" 
FROM 
  status 
  JOIN task ON status.id = task.status_id 
GROUP BY 
  status.name 
ORDER BY 
  count(task.id) DESC;
