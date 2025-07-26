import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

console.log(await getAllContacts());
