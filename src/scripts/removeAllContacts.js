import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = [];
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

removeAllContacts();
