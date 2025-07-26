import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  data.push(createFakeContact());
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

addOneContact();
