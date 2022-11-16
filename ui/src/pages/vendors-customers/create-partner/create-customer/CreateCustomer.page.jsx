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
import { SelectField } from "components/widgets";

import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

const currency = [
  { value: "eur", label: "Euro" },
  { value: "usd", label: "US Dollar" },
  { value: "rub", label: "Ruble" },
];

export const CreateCustomerPage = () => {
  const navigate = useNavigate();

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
                        onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
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
                      <Button className="btn btn-primary" color="danger">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Customer</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>
                  <FormGroup>
                    <Label for="customerName">Customer Name *</Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      placeholder="NY times"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="108 Parkway Drive"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+1 332 214 3429" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="webpage">Webpage</Label>
                    <Input
                      id="webpage"
                      name="webpage"
                      placeholder="https://website.com"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" placeholder="john.due@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customerType">Customer Type</Label>
                    <Input
                      id="customerType"
                      name="customerType"
                      placeholder="ex. Plumbing, Electrical"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Describe the purpose of this customer in a few lines..."
                      type="textarea"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="rate">Rate</Label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <Input id="rate" name="rate" placeholder="Rate" type="text" />
                      <div className="input-group-append">
                        <span className="input-group-text">per hour</span>
                      </div>
                    </div>
                    <p className="small">
                      Changes will only apply to Work Orders created in the future
                    </p>
                  </FormGroup>

                  <h2 className="pb-2">Billing Information</h2>
                  <FormGroup>
                    <Label for="billingName">Name</Label>
                    <Input id="billingName" name="billingName" placeholder="John Doe" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress">Address</Label>
                    <Input
                      id="billingAddress"
                      name="billingAddress"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress2">Address Line 2</Label>
                    <Input
                      id="billingAddress2"
                      name="billingAddress2"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="billingAddress3">Address Line 3</Label>
                    <Input
                      id="billingAddress3"
                      name="billingAddress3"
                      placeholder="First Avenue, New York, NY"
                      type="text"
                    />
                  </FormGroup>
                  <SelectField
                    id="input-currency"
                    label="Currency"
                    options={currency}
                    type="text"
                  />
                  <div className="header-buttons text-right mt-5">
                    <Button
                      className="bg-white"
                      color="secondary"
                      onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
                    >
                      Cancel
                    </Button>
                    <Button color="danger">Submit</Button>
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
