import React from "react";
import { IconContext } from "react-icons";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbBulb } from "react-icons/tb";

import { Container, Row, Col, Button, ButtonGroup, CardHeader, Card } from "reactstrap";

import { BoxHeader } from "components/headers";

// import { CUSTOMER_MAIN } from "./customers-details/customer.routes.consts";
import { CustomerMainPanel } from "./customers/CustomerMain.panel";

export const VendorsCustomersPage = () => {
  // const [activeTab] = useState(CUSTOMER_MAIN);
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="3">
                    <h3 className="col">Vendors & Customers</h3>
                  </Col>

                  <Col md={{ offset: 7 }} className="col">
                    <IconContext.Provider value={{ color: "676C6D", size: "20px" }}>
                      <div>
                        <TbBulb className="m-1" role="button" />
                        <BiBell className="m-1" role="button" />
                        <CgProfile className="m-1" role="button" />
                      </div>
                    </IconContext.Provider>
                  </Col>
                </Row>
              </CardHeader>
              <Row>
                <Col md="3">
                  <ButtonGroup aria-label="Basic example" role="group">
                    <Button
                      className="my-4 ml-4 btn-lg w-100 border border-grey rounded"
                      color="#F7F7F9"
                      type="button"
                    >
                      Vendors
                    </Button>
                    <Button
                      className="my-4 border border-grey rounded"
                      color="#F7F7F9"
                      type="button"
                    >
                      Consumers
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4"></Col>
                {/* <Col md="3"> */}
                {/* <FormGroup className="d-flex m-2">
                    <IconContext.Provider
                      md=""
                      value={{ color: "676C6D", size: "30px", padding: "33px" }}
                    >
                      <div>
                        <GoKebabVertical
                          className="m-2 p-1 border border-grey rounded"
                          role="button"
                        />
                      </div>
                    </IconContext.Provider>
                    {/* <Button
                      className="btn btn-primary rounded-pill"
                      style={{ width: "8rem" }}
                      color="primary"
                      onClick={onCreateNewCustomer}
                    >
                      + Customer
                    </Button> */}
                {/* </FormGroup> */}
                {/* </Col> */}
              </Row>
              {/* <TabContent activeTab={activeTab}>
          <TabPane tabId={CUSTOMER_MAIN}> */}
              {/* <CustomerMainPanel /> */}
              {/* </TabPane>
        </TabContent> */}
            </Card>
            <Row>
              <Col>
                <CustomerMainPanel />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
