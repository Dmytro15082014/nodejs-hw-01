import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const db = await readContacts();
  if (db.length === 0) return console.log('Data not found on DB');
  const data = [];
  await writeContacts(data);
};

removeAllContacts();
