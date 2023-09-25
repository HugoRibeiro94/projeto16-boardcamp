import dayjs from "dayjs";
import db from "../database/database.connection.js";

export async function listRentals (req,res){
    try{
		const rentals = await db.query(
			`SELECT rentals.*, customers.name, games.name AS nome
			FROM rentals
			JOIN customers ON "customerId" = customers.id
			JOIN games ON "gameId" = games.id;`
		)
		delete rentals.name
		delete rentals.nome
		function adicionaZero(numero){
			if (numero <= 9) 
				return "0" + numero;
			else
				return numero; 
		}
		const dateCustomers = rentals.rows.map(item => item.rentDate = (item.rentDate.getFullYear() + "-" + (adicionaZero(item.rentDate.getMonth() + 1).toString()) + "-" + (adicionaZero(item.rentDate.getDate().toString()))))

		const newObj = rentals.rows.find(id=>id)
		delete newObj.name;
		delete newObj.nome;
		console.log(newObj);
		const obj = rentals.rows.find( id => id)

		const rental = {
			...newObj,
			customer: {
				id:obj.customerId,
				name:obj.name
			},
			game:{
				id:obj.gameId,
				name: obj.nome
			} 
		}
		
		console.log(rental)
		res.send(rentals.rows)

	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function insertRentals (req,res){
	const {customerId, gameId, daysRented} = req.body;
	const {pricePerDay} = req.params
	console.log(pricePerDay)
    try{
		const originalPrice = pricePerDay*daysRented
		console.log(pricePerDay);
		const rentDate = dayjs(Date.now()).format('YYYY-MM-DD')
		console.log(rentDate);
		const newRental = await db.query(
			`INSERT INTO rentals ("customerId", "gameId","rentDate","daysRented", "originalPrice") VALUES ('${customerId}', '${gameId}','${rentDate}', '${daysRented}','${originalPrice}');`
		)
		res.status(201).send("insert")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function finishRentals (req,res){
	const { id } = req.params;

    try{
		res.status(200).send("finish")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function deleteRentals (req,res){
	const { id } = req.params;

    try{
		const delet = await db.query(`DELETE FROM rentals WHERE id = ${id};`)
		res.status(200).send(delet)
	} catch (err) {
		res.status(500).send(err.message)
	}
}