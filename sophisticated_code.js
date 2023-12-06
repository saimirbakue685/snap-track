// filename: sophisticated_code.js

/**
 * This code demonstrates a sophisticated implementation of a contact management system
 * It includes features such as adding, editing, and deleting contacts, as well as searching for contacts by name or number
 * The code also demonstrates the use of classes, arrays, and various built-in JavaScript methods and properties
 */

class Contact {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

class ContactManagementSystem {
  constructor() {
    this.contacts = [];
  }

  addContact(name, number) {
    const contact = new Contact(name, number);
    this.contacts.push(contact);
    console.log(`Contact '${name}' added successfully.`);
  }

  editContact(name, newNumber) {
    const contact = this.findContactByName(name);
    if (contact) {
      contact.number = newNumber;
      console.log(`Contact '${name}' updated successfully.`);
    } else {
      console.log(`Contact '${name}' not found.`);
    }
  }

  deleteContact(name) {
    const index = this.findContactIndexByName(name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Contact '${name}' deleted successfully.`);
    } else {
      console.log(`Contact '${name}' not found.`);
    }
  }

  findContactByName(name) {
    return this.contacts.find(contact => contact.name === name);
  }

  findContactIndexByName(name) {
    return this.contacts.findIndex(contact => contact.name === name);
  }

  searchContactByName(name) {
    const foundContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (foundContacts.length > 0) {
      console.log(`Found ${foundContacts.length} contact(s) with name '${name}':`);
      foundContacts.forEach((contact, index) =>
        console.log(`${index + 1}. ${contact.name} - ${contact.number}`)
      );
    } else {
      console.log(`No contacts found with name '${name}'.`);
    }
  }

  searchContactByNumber(number) {
    const foundContacts = this.contacts.filter(contact =>
      contact.number.includes(number)
    );

    if (foundContacts.length > 0) {
      console.log(`Found ${foundContacts.length} contact(s) with number '${number}':`);
      foundContacts.forEach((contact, index) =>
        console.log(`${index + 1}. ${contact.name} - ${contact.number}`)
      );
    } else {
      console.log(`No contacts found with number '${number}'.`);
    }
  }
}

// Example usage:
const cms = new ContactManagementSystem();
cms.addContact("John Doe", "123456789");
cms.addContact("Jane Smith", "987654321");
cms.addContact("Alice Johnson", "555555555");
cms.editContact("John Doe", "999999999");
cms.deleteContact("Jane Smith");
cms.searchContactByName("john");
cms.searchContactByNumber("555");

// More contacts and operations can be added below

// ...

// End of code