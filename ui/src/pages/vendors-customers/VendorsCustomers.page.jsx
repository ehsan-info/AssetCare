import React from "react";

import { Container, Row, Col } from "reactstrap";

import { BoxHeader } from "components/headers";

// import { CUSTOMER_MAIN } from "./customers-details/customer.routes.consts";
import { CustomerMainPanel } from "./customers-details/CustomerMain.panel";

export const VendorsCustomersPage = () => {
  // const [activeTab] = useState(CUSTOMER_MAIN);
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <CustomerMainPanel />
          </Col>
        </Row>
        {/* <TabContent activeTab={activeTab}>
          <TabPane tabId={CUSTOMER_MAIN}> */}
        <CustomerMainPanel />
        {/* </TabPane>
        </TabContent> */}
      </Container>
    </>

    //align-items-center py-4
  );
};
