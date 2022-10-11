import { TwoMouseEventActionButtons } from "components/widgets/react-table";

export const customersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "name",
      Header: "CUSTOMER NAME",
    },
    {
      accessor: "address.address",
      Header: "ADDRESS",
    },
    {
      accessor: "phone.phone",
      Header: "PHONE NUMBER",
    },
    {
      accessor: "customer_type.customer_type",
      Header: "CUSTOMER TYPE",
    },
    {
      accessor: "website.website",
      Header: "WEBSITE",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
