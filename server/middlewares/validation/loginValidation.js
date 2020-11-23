import Joi from 'joi';

// TODO: Further filtering & Sanitize
const loginValidationSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(8)
    .max(16)
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
});

const loginValidation = async (req, res, next) => {
  const { error } = await loginValidationSchema.validate(req.body);
  if (error) {
    return res.render('login', {
      title: 'Login', login: false, validateError: `${error.details[0].message}`,
    });
  }
  return next();
};

export default loginValidation;
