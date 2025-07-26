import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts.js';

const generateContacts = async (num) => {
  const db = await fs.readFile(PATH_DB, 'utf-8');
  const data = JSON.parse(db);
  for (let i = 0; i < num; i++) {
    const contact = createFakeContact();
    data.push(contact);
  }
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

generateContacts(5);
