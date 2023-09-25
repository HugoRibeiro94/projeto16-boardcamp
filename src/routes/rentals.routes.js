import { Router } from "express";
import { deleteRentals, finishRentals, insertRentals, listRentals } from "../controllers/rentals.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { rentalsSchema } from "../schemas/rentals.schemas.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals",listRentals);

rentalsRouter.post("/rentals",validateSchema(rentalsSchema), insertRentals);

rentalsRouter.post("/rentals/:id/return",finishRentals);

rentalsRouter.delete("/rentals/:id",deleteRentals);

export default rentalsRouter;