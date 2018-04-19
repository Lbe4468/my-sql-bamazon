var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: 'password',
	database: 'bamazon_db'
});

connection.connect(function (err) {
	if (err) throw err;
	runDisplay();
});

function runDisplay() {
	var query = 'SELECT * FROM products';
	connection.query(query, function (err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log("\nItem Id: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price);
		}
	})
	runQuestion();
};

function runQuestion() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "item_id",
				message: "\nPlease enter the Item Id of the product you would like to buy.",
				validate: validateNumber,
				filter: Number
			},
			{
				type: "input",
				name: "quantity",
				message: "How many would you like to purchase?",
				validate: validateNumber,
				filter: Number
			}
		]).then(function (input) {
			var item = input.item_id;
			var quantity = input.quantity;

			// query database to verify item is in stock in quantity selected
			var query = 'SELECT * FROM products WHERE ?';
			connection.query(query, { item_id: item }, function (err, res) {
				if (err) throw err;
				if (res.length === 0) {
					console.log('Error: Invalid Item Id. Please select a valid Item Id.');
					runDisplay();
				} else {
					var productData = res[0];
					if (quantity <= productData.stock_quantity) {
						console.log('Congratulations! Your product has been purchased.');
						var updateQuery = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
						connection.query(updateQuery, function (err, res) {
							if (err) throw err;
							console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
							console.log('Thank you for shopping with us!');
							connection.end();
						})
					} else {
						console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
						console.log('Please modify your order.');
						displayInventory();
					}
				}
			})
		})
};

function validateNumber(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);
	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole, non-zero number.';
	}
};