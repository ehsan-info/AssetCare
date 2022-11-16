import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { customersData } from "data/customers";
import { useLocalStateAlerts } from "hooks";

import { CustomerPanel } from "../../panels/customer-panel";

export const CustomerDetailsPage = () => {
  const { id } = useParams();
  const customerId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [customer] = useState(customersData.find(e => e.id === customerId));

  const onSaveCustomer = () => {
    console.log("update customer", customerId, customer);
    setSuccessMessage("Customer Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  const onBackToSearchClick = () => {
    navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <CustomerPanel
          customer={customer}
          onSave={onSaveCustomer}
          onBackToSearchClick={onBackToSearchClick}
        />
      </Container>
    </>
  );
};
