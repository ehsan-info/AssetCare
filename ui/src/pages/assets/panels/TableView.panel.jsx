import { useState } from "react";

import { Card } from "reactstrap";

import { ReactTable } from "components/widgets";

import { assetsData } from "data";

import { assetsTableColumns } from "../Assets.table";
export const TableViewPanel = () => {
  const [assets] = useState(assetsData);
  return (
    <>
      <Card className="pt-4">
        <ReactTable
          data={assets}
          columns={assetsTableColumns({
            onDetailsButtonClick: null,
            onRemoveButtonClick: null,
          })}
        />
      </Card>
    </>
  );
};
