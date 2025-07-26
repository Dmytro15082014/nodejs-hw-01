import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const db = await readContacts();
  if (db.length === 0) return console.log('Data not found on DB');
  const data = db.slice(0, db.length - 1);
  await writeContacts(data);
};

removeLastContact();
