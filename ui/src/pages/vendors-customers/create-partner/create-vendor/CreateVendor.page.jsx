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

import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

export const CreateVendorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="create-vendor">
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
                      <Button color="danger">Submit</Button>
                    </Col>
                  </Row>
                  <h1 className="mb-0">Add Vendor</h1>
                </CardHeader>
                <Col className="p-4">
                  <h2 className="pb-2">Details</h2>
                  <FormGroup>
                    <Label for="vendorName">Customer Name *</Label>
                    <Input id="vendorName" name="vendorName" placeholder="NY times" type="text" />
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
                    <Input id="email" name="email" placeholder="john.doe@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="vendorType">Customer Type</Label>
                    <Input
                      id="vendorType"
                      name="vendorType"
                      placeholder="ex. Plumbing, Electrical"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      id="description"
                      name="description"
                      placeholder="Describe the purpose of this vendor in a few lines..."
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
