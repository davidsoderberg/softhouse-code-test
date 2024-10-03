const { create } = require('xmlbuilder2');
const {
  createFamilyMember,
  createAddress,
  createPhone,
  createPerson,
} = require('./utils');

const convertToXML = (fileContent) => {
  const lines = fileContent.split('\n');
  const xml = create(); // Create xml
  const people = xml.ele('people'); // Create people element
  let currentPerson = null;
  let currentFamilyMember = null;

  for (const line of lines) {
    const parts = line.split('|');
    const type = parts[0];
    parts.shift(); // remove type from the array
    const person = currentFamilyMember ? currentFamilyMember : currentPerson;

    switch (type) {
      case 'P': // New person
        currentFamilyMember = null; // If new person is added, reset family member
        currentPerson = createPerson(people, parts);
        break;
      case 'T': // Phone number
        createPhone(person, parts);
        break;
      case 'A': // Address
        createAddress(person, parts);
        break;
      case 'F': // Family member
        currentFamilyMember = createFamilyMember(currentPerson, parts);
        break;
      default:
        console.error('Unknown type', type);
    }
  }

  // Return the XML as a string
  return xml.end({ prettyPrint: true, headless: true });
};

// Example usage
const input = `P|Victoria|Bernadotte
T|070-0101010|0459-123456
A|Haga Slott|Stockholm|101
F|Estelle|2012
A|Solliden|Öland|10002
F|Oscar|2016
T|0702-020202|02-202020
P|Joe|Biden
A|White House|Washington, D.C`;

console.log(convertToXML(input));

module.exports = {
  convertToXML,
};
