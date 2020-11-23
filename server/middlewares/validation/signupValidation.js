import Joi from 'joi';

// TODO: Further filtering & Sanitize
const signupValidationSchema = Joi.object({
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

const signupValidation = async (req, res, next) => {
  const { error } = await signupValidationSchema.validate(req.body);
  if (error) return res.render('signup', { title: 'Sign Up', login: false, validateError: `${error.details[0].message}` });
  return next();
};

export default signupValidation;
