const createFamilyMember = (person, parts) => {
  const [name, born] = parts;

  if (!name) {
    console.error('Name missing, can not create family member');
    return;
  }

  const familyMember = person.ele('family');
  familyMember.ele('name').txt(name).up();

  if (born) {
    familyMember.ele('born').txt(born).up();
  }

  return familyMember;
};

const createAddress = (person, parts) => {
  const address = person.ele('address');

  const [street, city, zipcode] = parts;

  if (!street) {
    console.error('Street missing, can not create address');
    return;
  }

  address.ele('street').txt(street).up();

  if (city) {
    address.ele('city').txt(city).up();
  }

  if (zipcode) {
    address.ele('zipcode').txt(zipcode).up();
  }

  return address;
};

const createPhone = (person, parts) => {
  const [mobile, landline] = parts;

  if (!mobile || !landline) {
    return;
  }

  const phone = person.ele('phone');

  if (mobile) {
    phone.ele('mobile').txt(mobile).up();
  }

  if (landline) {
    phone.ele('landline').txt(landline).up();
  }

  return phone;
};

const createPerson = (people, parts) => {
  const [firstname, lastname] = parts;

  if (!firstname) {
    console.error('Firstname missing, can not create person');
    return;
  }

  const person = people.ele('person');
  person.ele('firstname').txt(firstname).up();

  if (lastname) {
    person.ele('lastname').txt(lastname).up();
  }

  return person;
};

module.exports = {
  createPerson,
  createPhone,
  createAddress,
  createFamilyMember,
};
