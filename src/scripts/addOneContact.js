import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  const data = await readContacts();
  if (Array.isArray(data)) {
    data.push(createFakeContact());
    await writeContacts(data);
  } else {
    return console.log('Wrong type data in DB');
  }
};

addOneContact();
