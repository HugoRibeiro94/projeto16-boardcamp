import Joi from "joi";

export const customersSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().alphanum().min(10).max(11),
    cpf: Joi.string().alphanum().length(11).pattern(/^[0-9]+$/).required(),
    birthday: Joi.date().required()
})