import { TwoMouseEventActionButtons } from "components/widgets/react-table";

export const customersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "firstName",
      Header: "First Name",
    },
    {
      accessor: "lastName",
      Header: "Last Name",
    },
    {
      accessor: "address.address",
      Header: "Address",
    },
    {
      phone: "phone.phone",
      Header: "Phone Number",
    },
    {
      accessor: "website.website",
      Header: "Website",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
