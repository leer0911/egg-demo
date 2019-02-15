import * as bcrypt from 'bcryptjs';

const bhash = str => {
  return bcrypt.hashSync(str, 10);
};

const bcompare = (str, hash) => {
  return bcrypt.compareSync(str, hash);
};

const validateId = str => {
  return /^[a-zA-Z0-9\-_]+$/i.test(str);
};

export { bcompare, bhash, validateId };
