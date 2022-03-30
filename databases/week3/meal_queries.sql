-- Get all meals
SELECT 
  * 
FROM 
  meal;
-- Add a new meal
INSERT INTO meal (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`
) 
VALUES 
  (
    4, 'Home-made sushi', 'Vegan variations included', 
    'Copenhagen', '2022-04-08 18:00:00', 
    4, 80, '2022-03-29'
  );
-- Get a meal with any id, fx 1
SELECT 
  * 
FROM 
  meal 
WHERE 
  id = 2;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE 
  meal 
SET 
  max_reservations = 5 
WHERE 
  id = 2;
-- Delete a meal with any id, fx 1
DELETE FROM 
  meal 
WHERE 
  title = 'Currywurst';