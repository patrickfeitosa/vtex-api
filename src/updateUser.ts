import head from './internal/head';
import resultOk from './internal/resultOk';

import getByEmail from './services/getByEmail';
import partialUpdate from './services/partialUpdate';

import insertDocument from './insertDocument';

/**
 * Update a user if the email exists, or insert a new one if it doesn't
 *
 * @param {string} email The email of the user
 * @param {object} data  The data that will be updated.
 *
 * @return {promise}
 */
const updateUser = async (email: string, data: {}): Promise<any> => {
  const result = await getByEmail(email);

  return resultOk(result)
    ? partialUpdate(head(result).id, data, 'CL')
    : insertDocument({ email, ...data }, 'CL');
};

export default updateUser;