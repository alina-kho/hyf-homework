-- Get meals that has a price smaller than a specific price fx 90
SELECT 
  * 
FROM 
  meal 
WHERE 
  price < 50;
-- Get meals that still has available reservations
SELECT 
  meal.*, 
  meal.max_reservations - SUM(reservation.number_of_guests) AS `reservations_available` 
FROM 
  meal 
  JOIN reservation ON meal.id = reservation.meal_id 
GROUP BY 
  reservation.meal_id 
HAVING 
  meal.max_reservations > SUM(reservation.number_of_guests);
-- Get meals that partially match a title
SELECT 
  * 
FROM 
  meal 
WHERE 
  title LIKE "%arroz%";
-- Get meals that has been created between two dates
SELECT 
  * 
FROM 
  meal 
WHERE 
  created_date BETWEEN '2022-03-20' 
  AND '2022-03-27';
-- Get only specific number of meals
SELECT 
  * 
FROM 
  meal 
LIMIT 
  2;
-- Get the meals that have good reviews
SELECT 
  meal.*, 
  review.stars 
FROM 
  meal 
  JOIN review ON meal.id = review.meal_id 
WHERE 
  review.stars >= 4;
-- Get reservations for a specific meal sorted by created_date
SELECT 
  * 
FROM 
  reservation 
WHERE 
  meal_id = 1 
ORDER BY 
  created_date;
-- Sort all meals by average number of stars in the reviews
SELECT 
  meal.*, 
  AVG(review.stars) AS `average_rating` 
FROM 
  meal 
  JOIN review ON meal.id = review.meal_id 
GROUP BY 
  meal.id 
ORDER BY 
  `average_rating` DESC;