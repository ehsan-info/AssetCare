import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, Col, Container, Form, Row } from "reactstrap";

import { CloseButton } from "components/buttons";
import { BoxHeader } from "components/headers";
import { InputField } from "components/widgets";

import { filesData } from "data/files";
import { useLocalStateAlerts } from "hooks";

import { FILES_PAGE } from "../files.routes.const";

export const FileDetailsPage = () => {
  const { id } = useParams();
  const fileId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [fileUploaded, setFileUploaded] = useState(filesData.find(e => e.id === fileId));

  const onSaveFile = () => {
    console.log("update file", fileId, fileUploaded);
    setSuccessMessage("File Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Card>
          <Form>
            <Row className="d-flex justify-content-end m-2">
              <CloseButton onClick={() => navigate(`/admin${FILES_PAGE}`)} />
            </Row>
            <h1 className="m-4">File Name</h1>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <InputField
                    id="input-file-name"
                    label="Change current file name"
                    value={fileUploaded.name}
                    type="text"
                    onChange={e => setFileUploaded({ ...fileUploaded, name: e.target.value })}
                  />
                </Col>
              </Row>

              <Row className="d-flex flex-row-reverse m-4">
                <Button color="primary" type="button" onClick={onSaveFile}>
                  Update File
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate(`/admin${FILES_PAGE}`)}
                  className="mr-2"
                >
                  Cancel
                </Button>
              </Row>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};
