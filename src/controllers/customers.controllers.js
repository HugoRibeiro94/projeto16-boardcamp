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
		const customer = await db.query(
			`SELECT * FROM customers WHERE id = $1;`,
			[id]
		);

		res.send(customer.rows[0])
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function insertCustomers (req,res){
	const {name, phone, cpf, birthday} = req.body

    try{
		const customer = await db.query(
			`INSERT INTO customers (name, phone, cpf, birthday) VALUES ('${name}', '${phone}', '${cpf}', '${birthday}');`)
		res.send(customer)
   
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