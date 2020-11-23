import Joi from 'joi';

const changePasswordValidation = Joi.object({
  oldPassword: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
  repeatPassword: Joi.ref('password'),
});

export default changePasswordValidation;
