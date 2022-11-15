import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { peopleData } from "data/people";
import { useLocalStateAlerts } from "hooks";

import { PeoplePanel } from "../panels";
import { PEOPLE_TEAMS_PAGE } from "../peopleTeams.routes.const";

export const PeopleDetailsPage = () => {
  const { id } = useParams();
  const peopleId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [people] = useState(peopleData.find(e => e.id === peopleId));

  const onSavePeople = peopleRequest => {
    const httpUpdateRequest = {
      id: peopleRequest.id,
      body: peopleRequest,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    setSuccessMessage("Person Updated");
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
                    <h3 className="mb-0">Person Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${PEOPLE_TEAMS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <PeoplePanel people={people} onSave={onSavePeople} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
