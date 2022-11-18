import React from "react";
import { useNavigate } from "react-router";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

import { MAINTENANCE_PAGE } from "../maintenance.routes.const";

export const MaintenancePanel = ({ preventiveMaintenance, onSave }) => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Preventive Maintenance information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-trigger-name"
                      label="Trigger Name"
                      defaultValue={preventiveMaintenance.trigger_name}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="12">
                    <InputField
                      id="orderTitle"
                      label="Order Title"
                      defaultValue={preventiveMaintenance.order_title}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="priority"
                      label="Priority"
                      defaultValue={preventiveMaintenance.priority}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="12">
                    <InputField
                      id="category"
                      label="Category"
                      defaultValue={preventiveMaintenance.category}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="startsOn"
                      label="Starts on"
                      defaultValue={preventiveMaintenance.starts_on}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="12">
                    <InputField
                      id="endsOn"
                      label="Ends on"
                      defaultValue={preventiveMaintenance.ends_on}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
              </div>

              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <div className="pl-lg-4">
                    <Row>
                      <Button color="primary" onClick={onSave}>
                        Save
                      </Button>
                      <Button color="info" onClick={() => navigate(`${MAINTENANCE_PAGE}`)}>
                        Back to Search
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
