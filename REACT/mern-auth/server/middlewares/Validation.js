// NPM Packages
const [Joi] = [require("@hapi/joi")];

exports.signupValidation = async (req, res, next) => {
  const { username, email, password } = req.body;
  const schema = Joi.object({
    username: Joi.string().min(3).max(32).alphanum().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().min(8).max(32).required(),
  });
  const { error } = schema.validate({ username, email, password });
  if (error) {
    return res.status(422).json({ error: error.message });
  } else {
    next();
  }
};

exports.signinValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().required(),
  });
  const { error } = schema.validate({ email, password });
  if (error) {
    return res.status(422).json({ error: error.message });
  } else {
    next();
  }
};
