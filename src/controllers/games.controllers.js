import db from "../database/database.connection.js";

export async function listGames (req,res){
    try{
		res.send("list")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function insertGames (req,res){
    try{
		res.send("insert")
	} catch (err) {
		res.status(500).send(err.message)
	}
}