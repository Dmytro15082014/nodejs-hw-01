import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return data.length;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

console.log(await countContacts());
