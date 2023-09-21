import { Router } from "express";
import { insertGames, listGames } from "../controllers/games.controllers.js";

const gamesRouter = Router();

gamesRouter.get("/games", listGames );

gamesRouter.post("/games", insertGames);

export default gamesRouter;