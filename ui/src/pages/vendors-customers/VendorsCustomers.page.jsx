import React from "react";
import { IconContext } from "react-icons";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbBulb } from "react-icons/tb";

import { Container, Row, Col, CardHeader, Card } from "reactstrap";

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

              <CustomerMainPanel />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
