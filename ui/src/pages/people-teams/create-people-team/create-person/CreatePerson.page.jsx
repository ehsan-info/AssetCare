import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Container,
  Row,
  Button,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  CardHeader,
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { DateField } from "components/widgets";

import { PEOPLE_TEAMS_PAGE } from "pages/people-teams/peopleTeams.routes.const";

export const CreatePersonPage = () => {
  const navigate = useNavigate();
  const [lastVisitDate, setLastVisitDate] = useState([]);

  return (
    <div className="create-customer">
      <BoxHeader />
      <Container className="mt--6">
        <Row>
          <div className="col">
            <Card>
              <Form>
                <CardHeader>
                  <Row className="py-4">
                    <Col lg="6" xs="2" className="text-left pl-5">
                      <div
                        onClick={() => navigate(`/admin${PEOPLE_TEAMS_PAGE}`)}
                        aria-hidden="true"
                      >
                        <i
                          className="fa fa-times"
                          style={{
                            color: "red",
                            transform: "scale(2)",
                            cursor: "pointer",
                            alignSelf: "center",
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg="6" xs="2" className="text-right pr-5">
                      <Button className="btn btn-primary" color="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Person</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>

                  <FormGroup>
                    <Label for="personName">Person Name *</Label>
                    <Input
                      id="personName"
                      name="personName"
                      placeholder="Person name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" placeholder="Email" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+1 332 214 3429" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="jobTitle">Job Title</Label>
                    <Input id="jobTitle" name="jobTitle" placeholder="Job Title" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Company Name</Label>
                    <Input id="email" name="email" placeholder="Company Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customerType">Account Type</Label>
                    <Input
                      id="customerType"
                      name="customerType"
                      placeholder="Account Type"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Last Visit</Label>
                    <DateField
                      id="last-visit-date"
                      inputProps={{
                        placeholder: "Select date",
                      }}
                      value={lastVisitDate}
                      setValue={setLastVisitDate}
                    />
                  </FormGroup>

                  <div className="header-buttons text-right mt-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${PEOPLE_TEAMS_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="primary">Submit</Button>
                  </div>
                </Col>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};
