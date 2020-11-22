import Joi from 'joi';

const loginValidation = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(8)
    .max(16)
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
});

export default loginValidation;
