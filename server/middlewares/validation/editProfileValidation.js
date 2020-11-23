import Joi from 'joi';

const editProfileValidation = Joi.object({
  name: Joi.string()
    .allow('')
    .min(8)
    .max(30),
  gender: Joi.string()
    .valid('null', 'm', 'f'),
  dob: Joi.date()
    .allow('')
    .max('now'),
  status: Joi.string()
    .allow('')
    .max(50),
});

export default editProfileValidation;
