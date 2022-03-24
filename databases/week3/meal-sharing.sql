--Creating meal sharing database
CREATE DATABASE meal_sharing DEFAULT CHARACTER SET = 'utf8mb4';
USE meal_sharing;

-- Creating tables
-- Meal 
CREATE TABLE `meal` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL, 
  `description` TEXT DEFAULT NULL, 
  `location` VARCHAR(255) NOT NULL, 
  `when` DATETIME NOT NULL, 
  `max_reservations` INT(10) NOT NULL, 
  `price` DECIMAL(19, 2) NOT NULL, 
  `created_date` DATE NOT NULL
);
-- Reservation
CREATE TABLE `reservation` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `number_of_guests` INT(10) NOT NULL, 
  `meal_id` INT(10) UNSIGNED NOT NULL, 
  `created_date` DATE NOT NULL, 
  `contact_phonenumber` VARCHAR(255) NOT NULL, 
  `contact_name` VARCHAR(255) NOT NULL, 
  `contact_email` VARCHAR(255) NOT NULL, 
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);
-- Review
CREATE TABLE `review` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL, 
  `description` TEXT NOT NULL, 
  `meal_id` INT(10) UNSIGNED NOT NULL, 
  `stars` INT UNSIGNED NOT NULL, 
  `created_date` DATE NOT NULL, 
  CONSTRAINT `fk_meal_2` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

-- Adding some data
INSERT INTO meal (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`
) 
VALUES 
  (
    1, 'Arroz de cabidela', 'Delicious portuguese dish', 
    'Aalborg', '2022-04-01 12:30:00', 
    3, 50, '2022-03-22'
  );
INSERT INTO meal (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`
) 
VALUES 
  (
    2, 'Francesinha', 'Traditional portuguese sandwich', 
    'Aarhus', '2022-03-29 17:00:00', 
    4, 30, '2022-03-25'
  );
INSERT INTO meal (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`
) 
VALUES 
  (
    3, 'Currywurst', 'German wurst with fries and carry', 
    'Copenhagen', '2022-04-09 20:00:00', 
    5, 20, '2022-03-27'
  );
INSERT INTO reservation (
  `id`, `number_of_guests`, `meal_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
  (
    1, 2, 2, '2022-03-26', '22334455', 'Mads', 
    'mads@gmail.com'
  );
INSERT INTO reservation (
  `id`, `number_of_guests`, `meal_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
  (
    2, 1, 3, '2022-03-24', '52634755', 'Kate', 
    'kate@gmail.com'
  );
INSERT INTO reservation (
  `id`, `number_of_guests`, `meal_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
  (
    3, 3, 1, '2022-03-29', '51624055', 'Paul', 
    'paul@gmail.com'
  );
INSERT INTO review (
  `id`, `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    1, 'Amazingly good', 'Awesome food and wecoming host', 
    1, 5, '2022-02-02'
  );
INSERT INTO review (
  `id`, `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    2, 'Super tasty', 'Exactly like on Alex in Berlin', 
    3, 5, '2021-12-01'
  );
INSERT INTO review (
  `id`, `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    5, 'Nice', 'Liked it!', 2, 4, '2021-12-02'
  );
INSERT INTO review (
  `id`, `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    6, 'Perfect', 'Best sandwich ever', 
    2, 5, '2021-12-02'
  );

-- Task queries
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

-- Reservation
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

-- Get meals that has a price smaller than a specific price fx 90
SELECT 
  * 
FROM 
  meal 
WHERE 
  price < 50;

-- Get meals that still has available reservations
SELECT 
  meal.id, 
  meal.title, 
  meal.description, 
  meal.location, 
  meal.price, 
  meal.max_reservations - SUM(reservation.number_of_guests) AS `reservations_available` 
FROM 
  meal 
  JOIN reservation ON meal.id = reservation.meal_id 
GROUP BY 
  meal.id 
ORDER BY 
  `reservations_available` DESC;

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
