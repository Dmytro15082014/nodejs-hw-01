import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return data.toString();
  } catch (err) {
    console.error('File reading error:' + err.message);
  }
};
