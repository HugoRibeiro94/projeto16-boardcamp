import express from "express"
import cors from "cors"
import rentalsRouter from "./routes/rentals.routes.js";
import customersRouter from "./routes/customers.routes.js";
import gamesRouter from "./routes/games.routes.js";

const app = express();

// Configurações
app.use(cors());
app.use(express.json());

app.use(rentalsRouter);
app.use(customersRouter);
app.use(gamesRouter);

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})