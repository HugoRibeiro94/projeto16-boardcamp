import { Router } from "express";
import { insertCustomers, listCustomers, searchCustomers, updateCustomers } from "../controllers/customers.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { customersSchema } from "../schemas/customers.schemas.js";

const customersRouter = Router();

customersRouter.get("/customers", listCustomers);

customersRouter.get("/customers/:id", searchCustomers);

customersRouter.post("/customers", validateSchema(customersSchema), insertCustomers);

customersRouter.put("/customers/:id", validateSchema(customersSchema), updateCustomers);

export default customersRouter;