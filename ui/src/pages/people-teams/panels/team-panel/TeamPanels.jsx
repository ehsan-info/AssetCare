import { Button, Col, Form, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const TeamPanel = ({ team, onSave }) => {
  const { id, name, description, active } = team;

  const onSaveTeam = () => {
    const peopleSaveRequest = {
      id,
      team,
    };

    onSave(peopleSaveRequest);
  };
  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Team Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-team"
              label="Team Name"
              value={name}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-description"
              label="Description"
              value={description}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-active"
              label="Active"
              value={active ? "Yes" : "No"}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSaveTeam}>
            Update Team
          </Button>
        </Row>
      </div>
    </Form>
  );
};
