import { useState } from "react";
import { useNavigate } from "react-router";

import { Card } from "reactstrap";

import { ReactTable } from "components/widgets";

import { assetsData } from "data";
import { useLocalStateAlerts } from "hooks";

import { ASSET_DETAILS } from "../assets.routes.const";
import { assetsTableColumns } from "../Assets.table";
export const TableViewPanel = () => {
  const [assets, setAssets] = useState(assetsData);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const onDeleteAsset = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("asset deleted", id);
    setSuccessMessage("Asset deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setAssets(assets.filter(e => e.id !== parseInt(id)));
  };

  const onDetailAssetView = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${ASSET_DETAILS}/${id}`);
  };

  return (
    <>
      {alert}
      <Card className="pt-4">
        <ReactTable
          data={assets}
          columns={assetsTableColumns({
            onDetailsButtonClick: onDetailAssetView,
            onRemoveButtonClick: onDeleteAsset,
          })}
        />
      </Card>
    </>
  );
};
