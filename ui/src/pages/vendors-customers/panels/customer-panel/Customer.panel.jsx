import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const CustomerPanel = ({ customer, onSave, onBackToSearchClick }) => {
  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="6">
                <h2 className="mb-0">Customer Details</h2>
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
              <h4 className="heading-small text-muted mb-4">Customer information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-group-name"
                      label="Company Name"
                      defaultValue={customer.company_name}
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
                      defaultValue={customer.address}
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
                      defaultValue={customer.phone}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="website"
                      label="Website"
                      defaultValue={customer.website}
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
                      defaultValue={customer.email}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="customerType"
                      label="Customer Type"
                      defaultValue={customer.customer_type}
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
                      defaultValue={customer.rate}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="description"
                      label="Description"
                      defaultValue={customer.description}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              <h4 className="heading-small text-muted mb-4">Billing information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="billingName"
                      label="Name"
                      defaultValue={customer.billing_name}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="currency"
                      label="Currency"
                      defaultValue={customer.currency}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="billingAddress"
                      label="Address"
                      defaultValue={customer.billing_address}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="billingAddress2"
                      label="Address Line 2"
                      defaultValue={customer.billing_address2}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="billingAddress3"
                      label="Address Line 3"
                      defaultValue={customer.billing_address3}
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
