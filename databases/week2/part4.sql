-- Creating a database
CREATE DATABASE restaurant DEFAULT CHARACTER SET = 'utf8mb4';
USE restaurant;

--Creating tables
CREATE TABLE `menu` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
  `title` VARCHAR(255) NOT NULL, 
  `description` VARCHAR(255) NOT NULL, 
  `allergens` VARCHAR(255) DEFAULT NULL, 
  `price` DECIMAL(19, 2) NOT NULL, 
  PRIMARY KEY(`id`)
);

CREATE TABLE `order` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
  `dish_id` int(10) UNSIGNED NOT NULL, 
  `extras` VARCHAR(255) DEFAULT NULL, 
  `created` DATETIME DEFAULT NULL, 
  `due_date` DATETIME NOT NULL, 
  PRIMARY KEY(`id`), 
  CONSTRAINT `fk_menu` FOREIGN KEY (`dish_id`) REFERENCES `menu` (`id`)
);

CREATE TABLE `waiter` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
  `name` VARCHAR(255) DEFAULT NULL, 
  PRIMARY KEY(`id`)
);
-- Adding lacking foreign keys since it was impossible before
ALTER TABLE 
  `order` 
ADD 
  `waiter_id` INT(10) UNSIGNED NOT NULL;

ALTER TABLE 
  `order` 
ADD 
  FOREIGN KEY (`waiter_id`) REFERENCES `waiter`(`id`);

ALTER TABLE 
  `waiter` 
ADD 
  `order_id` INT(10) UNSIGNED NOT NULL;

ALTER TABLE 
  `waiter` 
ADD 
  FOREIGN KEY (`order_id`) REFERENCES `order`(`id`);
