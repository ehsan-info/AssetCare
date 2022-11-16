import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const VendorPanel = ({ vendor, onSave, onBackToSearchClick }) => {
  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="6">
                <h2 className="mb-0">Vendor Details</h2>
              </Col>
              <Col xs="6" className="text-right">
                <Button color="info" onClick={onBackToSearchClick}>
                  Back to Search
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Vendor information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-group-name"
                      label="Company Name"
                      defaultValue={vendor.company_name}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="10">
                    <InputField
                      id="address"
                      label="Address"
                      defaultValue={vendor.address}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="phone"
                      label="Phone"
                      defaultValue={vendor.phone}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="website"
                      label="Website"
                      defaultValue={vendor.website}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="email"
                      label="Email"
                      defaultValue={vendor.email}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="customerType"
                      label="Customer Type"
                      defaultValue={vendor.vendor_type}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="rate"
                      label="Hourly Rate"
                      defaultValue={vendor.rate}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="description"
                      label="Description"
                      defaultValue={vendor.description}
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
