import { Router } from "express";
import { insertCustomers, listCustomers, searchCustomers, updateCustomers } from "../controllers/customers.controllers.js";

const customersRouter = Router();

customersRouter.get("/customers", listCustomers);

customersRouter.get("/customers/:id", searchCustomers);

customersRouter.post("/customers", insertCustomers);

customersRouter.put("/customers/:id", updateCustomers);

export default customersRouter;