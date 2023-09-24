import Joi from "joi";

export const gamesSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.required(),
    stockTotal: Joi.number().positive(),
    pricePerDay: Joi.number().positive()
})