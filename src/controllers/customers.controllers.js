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
		//const customer = await db.query(`SELECT * FROM customers WHERE cpf = ${cpf}`)
		//if(customer) return res.status(409).send("CPF já cadastrado")

		const newCustomer = await db.query(
			`INSERT INTO customers (name, phone, cpf, birthday) VALUES ('${name}', '${phone}', '${cpf}', '${birthday}');`
		)
		res.sendStatus(201)
   
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function updateCustomers (req,res){
    const { id } = req.params;

	const {name, phone, cpf, birthday} = req.body

    try{
		const customer = await db.query(
			`UPDATE customers SET name='${name}', phone='${phone}', cpf='${cpf}', birthday=''${birthday}'  WHERE id = $1;`,
			[id]
		);

		res.send(customer.rows[0])
	} catch (err) {
		res.status(500).send(err.message)
	}
}