import { faker } from "@faker-js/faker";

import { randomAddress } from "./addresses-mocks";
import { randomEmail } from "./emails-mocks";
import { randomPhone } from "./phones-mocks";
import { randomWebsite } from "./websites-mocks";

const customers = [];
const howManyCustomers = 3;

const createCustomers = () => {
  //howMany
  const customersData = [];

  for (let i = 0; i < 5; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    customersData.push({
      id: i + 1,
      firstName: firstName,
      lastName: lastName,
      website: randomWebsite(),
      address: randomAddress(),
      phone: randomPhone(),
      email: randomEmail(),
      groups: [],
    });
  }

  return customersData;
};

export const mockCustomers = () => {
  console.log("In mockCustomers");
  if (customers.length == 0) {
    const calculatedCustomers = createCustomers(howManyCustomers);
    customers.push(...calculatedCustomers);
  }
  return customers;
};
