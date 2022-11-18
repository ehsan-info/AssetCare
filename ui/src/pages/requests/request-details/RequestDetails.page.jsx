import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { requestsData } from "data";
import { useLocalStateAlerts } from "hooks";

import { RequestPanel } from "../panels";
import { REQUESTS_PAGE } from "../requests.routes.const";

export const RequestDetailsPage = () => {
  const { id } = useParams();
  const requestId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [requests] = useState(requestsData.find(e => e.id === requestId));

  const onSaveRequest = request => {
    const httpUpdateRequest = {
      id: request.id,
      body: request,
    };
    console.log("Request update", httpUpdateRequest);
    setSuccessMessage("Request Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Request Details</h3>
                  </Col>{" "}
                  <Col lg="4" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${REQUESTS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <RequestPanel request={requests} onSave={onSaveRequest} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
