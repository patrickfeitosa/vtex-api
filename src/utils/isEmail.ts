/**
 * Check if a string is a valid mail.
 *
 * @category Validate
 * @param {string} email - The string to check
 *
 * @module utils
 *
 * @return {boolean}
 */
const isEmail = (email: string): boolean => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return regex.test(email);
};

export default isEmail;
