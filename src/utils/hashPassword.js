import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  //fetch and covert the salt round to an integer
  var salt_rounds = process.env.PASSWORD_HASH_SALT_ROUNDS
  var _salt_rounds = parseInt(salt_rounds)
  //hash the password
  const salt = await bcrypt.genSalt(_salt_rounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
