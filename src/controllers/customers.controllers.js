import db from "../database/database.connection.js";

export async function listCustomers (req,res){
    try{
		const customers = await db.query(`SELECT * FROM customers;`)

		res.send(customers.rows)

	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function searchCustomers (req,res){
	const { id } = req.params;

    try{
		const customer = await db.query(`SELECT * FROM customers WHERE id = ${id};`);

		res.send(customer.rows[0])
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function insertCustomers (req,res){
    try{
		res.send("insert")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function updateCustomers (req,res){
    try{
		res.send("update")
	} catch (err) {
		res.status(500).send(err.message)
	}
}