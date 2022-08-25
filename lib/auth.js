import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
  const hasedPassword = await hash(password, 12);
  return hasedPassword;
}

export async function verifyPassword(password, hasedPassword) {
  const isValid = await compare(password, hasedPassword);
  return isValid;
}
