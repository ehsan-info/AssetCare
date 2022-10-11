import { TwoMouseEventActionButtons } from "components/widgets/react-table";

export const customersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "name",
      Header: "Customer Name",
    },
    {
      accessor: "address.address",
      Header: "Address",
    },
    {
      accessor: "phone.phone",
      Header: "Phone Number",
    },
    {
      accessor: "customer_type.customer_type",
      Header: "Customer Type",
    },
    {
      accessor: "website.website",
      Header: "Website",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
