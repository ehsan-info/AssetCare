import { useState } from "react";

import { Card } from "reactstrap";

import { ReactTable } from "components/widgets";

import { assetsData } from "data";
import { useLocalStateAlerts } from "hooks";

import { assetsTableColumns } from "../Assets.table";
export const TableViewPanel = () => {
  const [assets, setAssets] = useState(assetsData);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onDeleteAsset = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("asset deleted", id);
    console.log(id);
    setSuccessMessage("Asset deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setAssets(assets.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <Card className="pt-4">
        <ReactTable
          data={assets}
          columns={assetsTableColumns({
            onDetailsButtonClick: null,
            onRemoveButtonClick: onDeleteAsset,
          })}
        />
      </Card>
    </>
  );
};
