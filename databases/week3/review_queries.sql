-- Get all reviews
SELECT 
  * 
FROM 
  review;
-- Add a new review
INSERT INTO review (
  `id`, `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    3, 'Super tasty', 'Exactly like it should be', 
    1, 5, '2021-12-02'
  );
INSERT INTO review (
  `id`, `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    7, 'Nice', 'The fish was a bit too salty though', 
    4, 4, '2021-12-02'
  );
-- Get a review with any id, fx 1
SELECT 
  * 
FROM 
  review 
WHERE 
  id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE 
  review 
SET 
  meal_id = 2 
WHERE 
  id = 3;
-- Delete review
DELETE FROM 
  review 
WHERE 
  id = 1;