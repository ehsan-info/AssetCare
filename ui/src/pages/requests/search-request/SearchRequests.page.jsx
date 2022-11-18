import React, { useState } from "react";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { requestsData } from "data";
import { useLocalStateAlerts } from "hooks";

import { REQUEST_DETAILS } from "../requests.routes.const";

import { requestsTableColumns } from "./SearchRequests.table";

export const SearchRequestsPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const [requests, setRequests] = useState(requestsData);

  const onViewRequestDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${REQUEST_DETAILS}/${id}`);
  };

  const onDeleteRequest = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete request", id);
    setSuccessMessage("Request deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setRequests(requests.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <ReactTable
        data={requests}
        columns={requestsTableColumns({
          onDetailsButtonClick: onViewRequestDetails,
          onRemoveButtonClick: onDeleteRequest,
        })}
      />
    </>
  );
};
