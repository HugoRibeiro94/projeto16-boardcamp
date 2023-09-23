import db from "../database/database.connection.js";

export async function listGames (req,res){
    try{

		const games = await db.query(`SELECT * FROM games;`)

		res.send(games.rows)

	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function insertGames (req,res){
	const {name, image, stockTotal, pricePerDay} = req.body

    try{
		const game = await db.query(`SELECT * FROM games WHERE name = ${name}`)
		if(game) return res.status(409).send("Nome já cadastrado")

		const newGame = await db.query(
			`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ('${name}', '${image}', '${stockTotal}', '${pricePerDay}');`
		)

		res.status(201).send(newGame)
	} catch (err) {
		res.status(500).send(err.message)
	}
}