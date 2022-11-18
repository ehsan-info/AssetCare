import React, { useState } from "react";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { workOrdersData } from "data";
import { useLocalStateAlerts } from "hooks";

import { ORDER_DETAILS } from "../workOrders.routes.const";

import { requestsTableColumns } from "./SearchOrder.table";

export const SearchOrdersPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const [orders, setOrders] = useState(workOrdersData);

  const onViewOrderDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${ORDER_DETAILS}/${id}`);
  };

  const onDeleteOrder = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete order", id);
    setSuccessMessage("Order deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setOrders(orders.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <ReactTable
        data={orders}
        columns={requestsTableColumns({
          onDetailsButtonClick: onViewOrderDetails,
          onRemoveButtonClick: onDeleteOrder,
        })}
      />
    </>
  );
};
