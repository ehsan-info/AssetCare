// import { IconContext } from "react-icons";
// import { BiBell } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { TbBulb } from "react-icons/tb";

// import { Card, Row } from "reactstrap";

import { ReactTable } from "../react-table/ReactTable";
// import { CUSTOMER_CREATE } from "../customer.routes.consts";

import { customersTableColumns } from "./customers.table";

export const SearchCustomersPanel = ({ customers }) => {
  // export const SearchCustomersPanel = ({ customers, onDelete, onViewDetails }) => {

  // export const SearchCustomersPanel = ({ customers, navigateToPanel, onDelete, onViewDetails }) => {
  // const onViewCustomerDetails = e => {
  //   e.preventDefault();
  //   const { id } = e.currentTarget;
  //   onViewDetails(parseInt(id));
  // };

  // const onDeleteCustomer = async e => {
  //   e.preventDefault();
  //   const { id } = e.currentTarget;
  //   onDelete(parseInt(id));
  // };

  // const onCreateNewCustomer = async e => {
  //   e.preventDefault();
  //   navigateToPanel(CUSTOMER_CREATE);
  // };

  return (
    <>
      <ReactTable
        className="mt-n100"
        data={customers}
        columns={customersTableColumns({
          // onDetailsButtonClick: onViewCustomerDetails,
          // onRemoveButtonClick: onDeleteCustomer,
        })}
      />
    </>
  );
};
