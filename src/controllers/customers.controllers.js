import db from "../database/database.connection.js";

export async function listCustomers (req,res){
    try{
		const customers = await db.query(`SELECT * FROM customers;`)

		function adicionaZero(numero){
			console.log(numero)
			if (numero <= 9) 
				return "0" + numero;
			else
				return numero; 
		}
		const dateCustomers = customers.rows.map(item => item.birthday = (item.birthday.getFullYear() + "-" + (adicionaZero(item.birthday.getMonth() + 1).toString()) + "-" + (adicionaZero(item.birthday.getDate().toString()))))
		console.log(dateCustomers)
		//const dataSemTempo = dateCustomers[0]
		//console.log(dataSemTempo);
		//let dataFormatada = (dataSemTempo.getFullYear() + "-" + ((dataSemTempo.getMonth() + 1)) + "-" + (dataSemTempo.getDate() )) ; 
		//console.log(dataFormatada);

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
		
		function adicionaZero(numero){
			console.log(numero)
			if (numero <= 9) 
				return "0" + numero;
			else
				return numero; 
		}

		const dateFormat = customer.rows[0];
		dateFormat.birthday = (dateFormat.birthday.getFullYear() + "-" + (adicionaZero(dateFormat.birthday.getMonth() + 1).toString()) + "-" + (adicionaZero(dateFormat.birthday.getDate().toString())))
		console.log(dateFormat)
		//console.log(dateCustomers)

		if (customer.rows.length == 0) return res.sendStatus(404)
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
			`UPDATE customers SET name='${name}', phone='${phone}', cpf='${cpf}', birthday=''${birthday.format('YYYY-MM-DD')}'  WHERE id = $1;`,
			[id]
		);

		res.send(customer.rows[0])
	} catch (err) {
		res.status(500).send(err.message)
	}
}