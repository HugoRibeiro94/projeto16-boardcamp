import { Router } from "express";
import { deleteRentals, finishRentals, insertRentals, listRentals } from "../controllers/rentals.controllers.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals",listRentals);

rentalsRouter.post("/rentals",insertRentals);

rentalsRouter.post("/rentals/:id/return",finishRentals);

rentalsRouter.delete("/rentals/:id",deleteRentals);

export default rentalsRouter;