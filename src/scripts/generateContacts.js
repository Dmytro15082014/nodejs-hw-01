import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (num) => {
  const data = await readContacts();
  if (Array.isArray(data)) {
    for (let i = 0; i < num; i++) {
      const contact = createFakeContact();
      data.push(contact);
    }
    await writeContacts(data);
  } else {
    return console.log('Wrong type data in DB');
  }
};

generateContacts(5);
