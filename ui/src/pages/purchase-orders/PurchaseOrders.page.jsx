import React from "react";

import { Card, CardBody, Container, Row, CardHeader } from "reactstrap";

import { BoxHeader } from "components/headers";

export const PurchaseOrdersPage = () => {
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Files page</h3>
              </CardHeader>
              <CardBody />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
