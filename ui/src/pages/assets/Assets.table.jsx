import { TwoMouseEventActionButtons } from "components/widgets";
export const assetsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "Name",
      Header: "Name",
    },
    {
      accessor: "id",
      Header: "ID",
    },
    {
      accessor: "location",
      Header: "Location",
    },
    {
      accessor: "area",
      Header: "Area",
    },
    {
      accessor: "model",
      Header: "Model",
    },
    {
      accessor: "barcode",
      Header: "Barcode",
    },
    {
      accessor: "category",
      Header: "Category",
    },
    {
      accessor: "asset status",
      Header: "Asset Status",
    },
    {
      accessor: "x",
      Header: "X",
    },
    {
      accessor: "y",
      Header: "Y",
    },
    {
      accessor: "z",
      Header: "Z",
    },
    {
      accessor: "m",
      Header: "M",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
