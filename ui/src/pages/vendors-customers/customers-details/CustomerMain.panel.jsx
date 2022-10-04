import { useEffect, useState } from "react";

import { Col, TabContent, TabPane } from "reactstrap";

import { addressesData } from "__mocks/data/addresses-mocks";
import { mockCustomers } from "__mocks/data/customers-mocks";
import { emailsData } from "__mocks/data/emails-mocks";
import { namesData } from "__mocks/data/names-mocks";
import { phonesData } from "__mocks/data/phones-mocks";
import { websitesData } from "__mocks/data/websites-mocks";
import {
  namesDataAsSelectOptions,
  addressesDataAsSelectOptions,
  emailsDataAsSelectOptions,
  phonesDataAsSelectOptions,
  websitesDataAsSelectOptions,
} from "common/category-utils";

import { CreateCustomerPanel } from "./create-customer/CreateCustomer.panel";
import { CustomerDetailsPanel } from "./customer-details/CustomerDetails.panel";
import { CUSTOMER_CREATE, CUSTOMER_DETAILS, CUSTOMER_SEARCH } from "./customer.routes.consts";
import { SearchCustomersPanel } from "./search-customers/SearchCustomers.panel";

export const CustomerMainPanel = () => {
  const [activePanel, setActivePanel] = useState(CUSTOMER_SEARCH);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    setCustomers(mockCustomers());
    console.log("cunssomeeers", customers);
  }, []);
  // setCustomers(mockCustomers());
  // console.log("cunssomeeers", customers);
  const [currentCustomer, setCurrentCustomer] = useState({});

  const names = namesDataAsSelectOptions(namesData);
  const addresses = addressesDataAsSelectOptions(addressesData);
  const emails = emailsDataAsSelectOptions(emailsData);
  const phones = phonesDataAsSelectOptions(phonesData);
  const websites = websitesDataAsSelectOptions(websitesData);

  const onCreateNew = newCustomer => {
    console.log("newCustomer", newCustomer);
  };

  const onSave = partialCustomer => {
    console.log("partialCustomer", partialCustomer);
    return partialCustomer;
  };

  const onViewCustomerDetails = id => {
    const foundCustomer = customers.find(employee => employee.id === id);
    setCurrentCustomer(foundCustomer);
    setActivePanel(CUSTOMER_DETAILS);
  };

  const onSearchCustomers = async customerSearchRequest => {
    console.log(customerSearchRequest);
    //change customers according to query result
    setCustomers(mockCustomers());
    console.log("customerS", customers);
  };

  const onDelete = id => {
    console.log(id);
  };

  return (
    <Col>
      <TabContent activeTab={activePanel}>
        <TabPane tabId={CUSTOMER_SEARCH}>
          <SearchCustomersPanel
            customers={customers}
            names={names}
            addresses={addresses}
            phones={phones}
            emails={emails}
            websites={websites}
            navigateToPanel={setActivePanel}
            onSearchCustomers={onSearchCustomers}
            onDelete={onDelete}
            onViewDetails={onViewCustomerDetails}
          />
        </TabPane>
        <TabPane tabId={CUSTOMER_CREATE}>
          <CreateCustomerPanel onSaveNewCustomer={onCreateNew} /> navigateToPanel={setActivePanel}
        </TabPane>
        <TabPane tabId={CUSTOMER_DETAILS}>
          <CustomerDetailsPanel
            customer={currentCustomer}
            onSave={onSave}
            navigateToPanel={setActivePanel}
          />
        </TabPane>
      </TabContent>
    </Col>
  );
};
