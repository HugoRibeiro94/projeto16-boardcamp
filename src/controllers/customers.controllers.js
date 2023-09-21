import db from "../database/database.connection.js";

export async function listCustomers (req,res){
    try{
		res.send("list")
	} catch (err) {
		res.status(500).send(err.message)
	}
}

export async function searchCustomers (req,res){
    try{
		res.send("search")
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