-- drops database if currently exists
DROP DATABASE IF EXISTS bamazon_db;

-- creates database named 'bamazon_db'
CREATE DATABASE bamazon_db;

-- so that following code applies to bamazon_db
USE bamazon_db;

-- create table 'products' 
CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,4) NOT NULL,
	stock_quantity INT(10) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mizuno Golf Clubs", "Sports", "699.99", "250");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Titleist Pro V1 Golf Balls", "Sports", "49.99", "500");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Jazz Electric Bass Guitar", "Musical Instruments", "627.99", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Galaxy Tab A", "Electronics", "229.99", "1000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony PS4 Plus Kit", "Toys & Games", "389.50", "75");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Alchemist", "Books", "10.73", "745" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose Wireless Headphones", "Electronics", "349.99", "300");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Seagate External HD - 2TB", "Computers", "99.99", "600");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Levi Men's Blue Jeans", "Clothing", "34.95", "225");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Epson 4400 Printer", "Computers", "149.95", "200");

