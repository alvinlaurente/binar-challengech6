import Joi from 'joi';

// TODO: Further filtering & Sanitize
const changePasswordValidationSchema = Joi.object({
  oldPassword: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
  repeatPassword: Joi.ref('password'),
});

const changePasswordValidation = async (req, res, next) => {
  const { error } = await changePasswordValidationSchema.validate(req.body);
  if (error) {
    return res.render('changePassword', {
      title: 'Change Password', login: true, username: req.session.username || '', validateError: `${error.details[0].message}`,
    });
  }
  return next();
};

export default changePasswordValidation;
