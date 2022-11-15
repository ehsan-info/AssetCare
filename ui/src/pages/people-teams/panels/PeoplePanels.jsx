import { useState } from "react";

import { Button, Col, Form, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const PeoplePanel = ({ people, onSave }) => {
  const [roleId] = useState(people.roleId);
  const [groups] = useState(people.groups || []);

  const onSavePeople = () => {
    const peopleSaveRequest = {
      id: people.id,
      roleId,
      groups,
    };

    onSave(peopleSaveRequest);
  };
  return (
    <Form>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">People Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-fullName"
              label="Full Name"
              value={people.fullName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-email"
              label="E-mail address"
              value={people.email}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-phone"
              label="Phone number"
              value={people.phone}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-jobTitle"
              label="Job Title"
              value={people.jobTitle}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-companyName"
              label="Company Name"
              value={people.companyName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-accountType"
              label="Account Type"
              value={people.accountType}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-lastVisit"
              label="Last Visit"
              value={people.lastVisit}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSavePeople}>
            Update People
          </Button>
        </Row>
      </div>
    </Form>
  );
};
