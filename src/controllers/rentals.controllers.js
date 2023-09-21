import db from "../database/database.connection.js";

export async function listRentals (req,res){
    try{
		res.send("list")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function insertRentals (req,res){
    try{
		res.send("insert")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function finishRentals (req,res){
    try{
		res.send("finish")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function deleteRentals (req,res){
    try{
		res.send("delete")
	} catch (err) {
		res.status(500).send(err.message)
	}
}