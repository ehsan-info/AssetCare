import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, Container, Row, Col, Input, Label, Button } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { purchaseOrdersData } from "data";

import { PURCHASE_ORDERS_DETAILS, PurchaseOrdersTableColumns } from ".";

export const PurchaseOrdersPage = () => {
  const navigate = useNavigate();

  const [purchaseOrders] = useState(purchaseOrdersData);

  const onViewPurchaseOrdersDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${PURCHASE_ORDERS_DETAILS}/${id}`);
  };

  const onDeletePurchaseOrders = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete purchase orders", id);
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="align-items-center justify-content-between">
                  <Col lg="auto">
                    <Row className="align-items-center gx-5">
                      <Col lg="auto">
                        <h3 className="mb-0">Purchase Orders |</h3>
                      </Col>
                      <Col lg="auto">
                        <Input type="checkbox" />
                        <Label check>Select Purchase Orders</Label>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="auto">
                    <Button>Show/Hide</Button>
                    <Button>Export</Button>
                    <Button color="primary">+ Purchase Order</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <ReactTable
                data={purchaseOrders}
                columns={PurchaseOrdersTableColumns({
                  onDetailsButtonClick: onViewPurchaseOrdersDetails,
                  onRemoveButtonClick: onDeletePurchaseOrders,
                })}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
