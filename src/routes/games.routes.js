import { Router } from "express";
import { insertGames, listGames } from "../controllers/games.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { gamesSchema } from "../schemas/games.schemas.js";

const gamesRouter = Router();

gamesRouter.get("/games", listGames );

gamesRouter.post("/games", validateSchema(gamesSchema), insertGames);

export default gamesRouter;