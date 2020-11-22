import Joi from 'joi';

const loginValidation = (data) => {
  const schema = {
    username: Joi.string()
      .alphanum()
      .min(8)
      .max(16)
      .required(),
    password: Joi.string().min(8).required(),
  };
  return Joi.validate(data, schema);
};

export default loginValidation;
