-- Get all reservations
SELECT 
  * 
FROM 
  reservation;
-- Add a new reservation
INSERT INTO reservation (
  `id`, `number_of_guests`, `meal_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
  (
    4, 4, 4, '2022-03-30', '71624115', 'Joe', 
    'joe@gmail.com'
  );
-- Get a reservation with any id, fx 1
SELECT 
  * 
FROM 
  reservation 
WHERE 
  id = 3;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE 
  reservation 
SET 
  `contact_phonenumber` = '32465786' 
WHERE 
  id = 3;
-- Delete a reservation with any id, fx 1
DELETE FROM 
  reservation 
WHERE 
  id = 1;