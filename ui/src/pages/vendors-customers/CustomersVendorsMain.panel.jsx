/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, ButtonGroup, TabContent, TabPane } from "reactstrap";

import { addressesData } from "__mocks/data/addresses-mocks";
import { mockCustomers } from "__mocks/data/customers-mocks";
import { customerTypesData } from "__mocks/data/customerTypes-mocks";
import { emailsData } from "__mocks/data/emails-mocks";
import { phonesData } from "__mocks/data/phones-mocks";
import { websitesData } from "__mocks/data/websites-mocks";
import {
  addressesDataAsSelectOptions,
  emailsDataAsSelectOptions,
  phonesDataAsSelectOptions,
  websitesDataAsSelectOptions,
  customerTypesDataAsSelectOptions,
} from "common/category-utils";

// import { CreateCustomerPanel } from "./create-customer/CreateCustomer.panel";
// import { CustomerDetailsPanel } from "./customer-details/CustomerDetails.panel";
import { CUSTOMER_CREATE, CUSTOMER_DETAILS, CUSTOMER_SEARCH } from "./customer.routes.consts";
import { ReactTable } from "./react-table";
import { customersTableColumns } from "./react-table/customers.table";

export const CustomersVendorsMainPanel = () => {
  const [activePanel, setActivePanel] = useState(CUSTOMER_SEARCH);
  const [customers, setCustomers] = useState([]);
  const customer_vendor = useSelector(state => state.customer_vendor);
  const dispatch = useDispatch();
  useEffect(() => {
    setCustomers(mockCustomers());
  }, []);

  // const [currentCustomer] = useState({}); //setCurrentCustomer

  const addresses = addressesDataAsSelectOptions(addressesData);
  const emails = emailsDataAsSelectOptions(emailsData);
  const phones = phonesDataAsSelectOptions(phonesData);
  const websites = websitesDataAsSelectOptions(websitesData);
  const customer_types = customerTypesDataAsSelectOptions(customerTypesData);

  // const onCreateNew = newCustomer => {
  //   console.log("newCustomer", newCustomer);
  // };

  // const onSave = partialCustomer => {
  //   console.log("partialCustomer", partialCustomer);
  //   return partialCustomer;
  // };

  // const onViewCustomerDetails = id => {
  //   const foundCustomer = customers.find(employee => employee.id === id);
  //   setCurrentCustomer(foundCustomer);
  //   setActivePanel(CUSTOMER_DETAILS);
  // };

  const onSearchCustomers = async customerSearchRequest => {
    setCustomers(mockCustomers());
  };

  // const onDelete = id => {
  //   console.log(id);
  // };
  const btnHandler = event => {
    if (event.classList.contains("customers")) {
      dispatch({ type: "SET_FIELD", payload: "customers" });
    } else if (event.classList.contains("vendors")) {
      dispatch({ type: "SET_FIELD", payload: "vendors" });
      event.classList.add("bg-gradient-info text-white");
    }
  };

  return (
    <TabContent activeTab={activePanel}>
      <TabPane className="" tabId={CUSTOMER_SEARCH}>
        <ButtonGroup aria-label="Basic example" role="group">
          <Button
            className={
              customer_vendor === "vendors"
                ? "vendors ml-4 my-4 border border-grey rounded bg-gradient-info text-white"
                : "vendors ml-4 my-4 border border-grey rounded "
            }
            color="#F7F7F9"
            type="button"
            onClick={e => btnHandler(e.target)}
          >
            Vendors
          </Button>
          <Button
            active
            className={
              customer_vendor === "customers"
                ? "customers  my-4 border border-grey rounded bg-gradient-info text-white"
                : "customers my-4 border border-grey rounded "
            }
            color="#F7F7F9"
            type="button"
            onClick={e => btnHandler(e.target)}
          >
            Consumers
          </Button>
        </ButtonGroup>

        {/* <SearchCustomersPanel
          customers={customers}
          addresses={addresses}
          phones={phones}
          emails={emails}
          websites={websites}
          customer_types={customer_types}
          navigateToPanel={setActivePanel}
          onSearchCustomers={onSearchCustomers}
          onDelete={onDelete}
          onViewDetails={onViewCustomerDetails}
        /> */}
        <ReactTable
          className="mt-n100"
          data={customers}
          columns={customersTableColumns({
            // onDetailsButtonClick: onViewCustomerDetails,
            // onRemoveButtonClick: onDeleteCustomer,
          })}
        />
      </TabPane>
      {/* <TabPane tabId={CUSTOMER_CREATE}>
          <CreateCustomerPanel onSaveNewCustomer={onCreateNew} /> navigateToPanel={setActivePanel}
        </TabPane>
        <TabPane tabId={CUSTOMER_DETAILS}>
          <CustomerDetailsPanel
            customer={currentCustomer}
            onSave={onSave}
            navigateToPanel={setActivePanel}
          />
        </TabPane> */}
    </TabContent>
  );
};
