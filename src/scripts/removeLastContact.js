import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const db = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const data = db.slice(0, db.length - 1);
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

removeLastContact();
