import React, { useState } from "react";

import { useLocalStateAlerts } from "hooks";

import { AssetsTabs } from "../Assets.tabs";

import { AddAsset } from "./AddAsset.panel";

export const AssetsPanel = () => {
  const [activePanel, setActivePanel] = useState("detail");
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onSavePartner = () => {
    setActivePanel("detail");

    setSuccessMessage("Asset Added");
    setIsSuccess(true);
    setSaveSent(true);
  };
  const onCloseAddPartnerForm = () => {
    setActivePanel("detail");
  };

  return (
    <>
      {alert}
      {activePanel === "detail" ? (
        <AssetsTabs onClick={() => setActivePanel("form")} />
      ) : (
        <AddAsset onSave={onSavePartner} onClose={onCloseAddPartnerForm} />
      )}
    </>
  );
};
