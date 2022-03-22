USE homework;

-- Task 1 Get all the tasks assigned to users whose email ends in @spotify.com
SELECT 
  task.* 
FROM 
  task 
  JOIN user_task ON task.id = user_task.task_id 
  JOIN user ON user_task.user_id = user.id 
WHERE 
  user.email LIKE "%@spotify.com";

-- Task 2 Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT 
  task.* 
FROM 
  task 
  JOIN user_task ON task.id = user_task.task_id 
  JOIN user ON user_task.user_id = user.id 
  JOIN status ON status.id = task.status_id 
WHERE 
  user.name = 'Donald Duck' 
  AND status.name = 'Not started';

-- Task 3 Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT 
  task.* 
FROM 
  task 
  JOIN user_task ON task.id = user_task.task_id 
  JOIN user ON user_task.user_id = user.id 
WHERE 
  user.name = "Maryrose Meadows" 
  AND month(created)= 9;

-- Task 4 
SELECT 
  month(created) As 'Month of creation', 
  COUNT(*) AS 'Tasks in total' 
FROM 
  task 
GROUP BY 
  month(created);