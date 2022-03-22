USE homework;
-- Part 1
-- Task 1. Add task
-- Adding user_id column to task table

ALTER TABLE 
  task 
ADD 
  user_id int(10) unsigned NOT NULL;

-- Updating user_id column in task table
UPDATE 
  task t, 
  user_task u 
SET 
  t.user_id = u.user_id 
WHERE 
  t.id = u.task_id;

-- Inserting data to task
INSERT INTO task (
  title, description, created, updated, 
  due_date, status_id, user_id
) 
VALUES 
  (
    'Do the homework', 'Databases week 2', 
    '2017-10-25 06:54:16', '2017-10-27 06:54:16', 
    '2017-10-28 06:54:16', 2, 4
  );

-- Task 2 Change the title of a task
UPDATE 
  task 
SET 
  title = 'Buy plane ticket to London' 
WHERE 
  id = 34;

-- Task 3 Change a task due date
UPDATE 
  task 
SET 
  due_date = '2017-10-29 06:54:16' 
WHERE 
  id = 36;

-- Task 4 Change a task status
UPDATE 
  task 
SET 
  status_id = 1 
WHERE 
  id = 36;

-- Task 5 Mark a task as complete
UPDATE 
  task 
SET 
  status_id = 3 
WHERE 
  id = 36;

-- Task 6 Delete a task
DELETE FROM 
  task 
WHERE 
  id = 36;
