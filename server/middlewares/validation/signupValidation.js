import Joi from 'joi';

const signupValidation = Joi.object({
  name: Joi.string()
    .min(8)
    .max(30)
    .required(),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'id', 'org', 'co'] } }),
  username: Joi.string()
    .alphanum()
    .min(8)
    .max(16)
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
  repeatPassword: Joi.ref('password'),
});

export default signupValidation;
