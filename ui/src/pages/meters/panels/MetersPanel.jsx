import { useState } from "react";

import { metersData } from "data/meters";
import { useLocalStateAlerts } from "hooks";

import { FilterBar, Toolbar, CustomModal } from "../components";

import { AddMeterDetail, EmptyView, TableView } from ".";

export const MetersPanel = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [addModal, setAddModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [meters] = useState(metersData);

  const toggle = () => {
    if (addModal === true) {
      setAddModal(false);
    }
    if (detailModal === true) {
      setDetailModal(false);
    }
  };

  const showForm = () => {
    setAddModal(true);
  };

  const onSaveMeter = newMeter => {
    setAddModal(false);
    setDetailModal(true);
    setSuccessMessage("Meter Added");
    setIsSuccess(true);
    setSaveSent(true);

    console.log("new meter created:", newMeter);
  };

  const onCloseAddMeterForm = () => {
    setAddModal(false);
  };

  const onDeleteMeter = id => {
    setSuccessMessage("Meter Deleted");
    setIsSuccess(true);
    setSaveSent(true);
    console.log("deleted meter id:", id);
  };

  return (
    <>
      {alert}
      <Toolbar onClick={showForm} />
      <FilterBar />
      <CustomModal isOpen={addModal} toggle={toggle}>
        <AddMeterDetail onClose={onCloseAddMeterForm} onSave={onSaveMeter} />
      </CustomModal>
      {meters.length === 0 ? (
        <EmptyView />
      ) : (
        <TableView meters={meters} deleteMeter={onDeleteMeter} />
      )}
    </>
  );
};
