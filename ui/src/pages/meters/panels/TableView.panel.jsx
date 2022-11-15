import { useState } from "react";

import { ReactTable } from "components/widgets";

import { metersTableColumns } from "..";

export const TableView = ({ deleteMeter, meters }) => {
  const [data, setData] = useState(meters);

  const onDeleteMeter = e => {
    const { id } = e.target;
    deleteMeter(id);

    setData(
      data.filter(meter => {
        return meter.id !== Number(id);
      })
    );
  };

  return (
    <>
      {alert}
      <ReactTable
        data={data}
        columns={metersTableColumns({
          onRemoveButtonClick: onDeleteMeter,
        })}
      />
    </>
  );
};
