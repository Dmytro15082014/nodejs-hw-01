import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.writeFile(PATH_DB, updatedContacts, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('File writing error:' + err.message);
  }
};
