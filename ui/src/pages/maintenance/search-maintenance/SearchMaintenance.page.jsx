import React, { useState } from "react";
import { useNavigate } from "react-router";

import { ReactTable } from "components/widgets";

import { maintenanceData } from "data";
import { useLocalStateAlerts } from "hooks";

import { MAINTENANCE_DETAILS } from "../maintenance.routes.const";

import { maintenanceTableColumns } from "./SearchMaintenance.table";

export const SearchMaintenancePage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const [preventiveMaintenance, setPreventiveMaintenance] = useState(maintenanceData);

  const onViewMaintenanceDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${MAINTENANCE_DETAILS}/${id}`);
  };

  const onDeleteMaintenance = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete preventive maintenance", id);
    setSuccessMessage("Preventive Maintenance deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setPreventiveMaintenance(preventiveMaintenance.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <ReactTable
        data={preventiveMaintenance}
        columns={maintenanceTableColumns({
          onDetailsButtonClick: onViewMaintenanceDetails,
          onRemoveButtonClick: onDeleteMaintenance,
        })}
      />
    </>
  );
};
