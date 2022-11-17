import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Spinner } from "reactstrap";

import { ReactTable } from "components/widgets";

import { customersData } from "data/customers";
import { vendorsData } from "data/vendors";
import { useLocalStateAlerts } from "hooks";

import { CUSTOMER_DETAILS, VENDOR_DETAILS } from "../vendorsCustomers.routes.const";

import { customersTableColumns } from "./SearchCustomers.table";
import { vendorsTableColumns } from "./SearchVendors.table";

export const SearchVendorsCustomersPage = ({ toggle }) => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const [customers, setCustomers] = useState(customersData);
  const [vendors, setVendors] = useState(vendorsData);

  const onViewCustomerDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${CUSTOMER_DETAILS}/${id}`);
  };

  const onViewVendorDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${VENDOR_DETAILS}/${id}`);
  };

  const onDeleteCustomer = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete customer", id);
    setSuccessMessage("Customer deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setCustomers(customers.filter(e => e.id !== parseInt(id)));
  };

  const onDeleteVendor = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete vendor", id);
    setSuccessMessage("Vendor deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setVendors(vendors.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      {toggle ? (
        <ReactTable
          data={vendors}
          columns={vendorsTableColumns({
            onDetailsButtonClick: onViewVendorDetails,
            onRemoveButtonClick: onDeleteVendor,
          })}
        />
      ) : !toggle ? (
        <ReactTable
          data={customers}
          columns={customersTableColumns({
            onDetailsButtonClick: onViewCustomerDetails,
            onRemoveButtonClick: onDeleteCustomer,
          })}
        />
      ) : (
        <div className="text-center">
          <Spinner />
        </div>
      )}
    </>
  );
};
