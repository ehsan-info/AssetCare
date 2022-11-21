import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const MeterPanel = ({ meter, onSave, onBackToSearchClick }) => {
  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Meter information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-meter-name"
                      label="Meter Name"
                      defaultValue={meter.meterName}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-reading-due"
                      label="Next Reading Due"
                      defaultValue={meter.nextReadingDue}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-measurement"
                      label="Unit Of Measurement"
                      defaultValue={meter.unitOfMeasurement}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-last-reading"
                      label="Last Reading"
                      defaultValue={meter.lastReading}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="input-frequency"
                      label="Frequency"
                      defaultValue={meter.frequency}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="location"
                      label="Location"
                      defaultValue={meter.location}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <InputField
                      id="asset"
                      label="Asset"
                      defaultValue={meter.asset}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="12">
                    <InputField
                      id="automated"
                      label="Automated"
                      defaultValue={meter.automated}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="12">
                    <InputField
                      id="createdAt"
                      label="Created At"
                      defaultValue={meter.createdAt}
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
                      <Button color="info" onClick={onBackToSearchClick}>
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
