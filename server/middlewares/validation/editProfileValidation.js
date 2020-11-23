import Joi from 'joi';

// TODO: Further filtering & Sanitize
const editProfileValidationSchema = Joi.object({
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

const editProfileValidation = async (req, res, next) => {
  const { error } = await editProfileValidationSchema.validate(req.body);
  if (error) {
    return res.render('editProfile', {
      title: 'Edit Profile', login: true, username: req.session.username || '', validateError: `${error.details[0].message}`,
    });
  }
  return next();
};

export default editProfileValidation;
