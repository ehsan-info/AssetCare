import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactTable } from "components/widgets";

import { filesData } from "data/files";
import { useLocalStateAlerts } from "hooks";

import { FILE_DETAILS } from "../files.routes.const";

import { filesTableColumns } from "./Files.table";

export const FilesSearchPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const [files, setFiles] = useState(filesData);

  const onViewFileDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${FILE_DETAILS}/${id}`);
  };

  const onDeleteFile = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("file deleted", id);
    setSuccessMessage("File deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setFiles(files.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}

      <ReactTable
        data={files}
        columns={filesTableColumns({
          onDetailsButtonClick: onViewFileDetails,
          onRemoveButtonClick: onDeleteFile,
        })}
      />
    </>
  );
};
