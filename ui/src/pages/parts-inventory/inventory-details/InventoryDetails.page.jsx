import { useState } from "react";
import { useParams } from "react-router-dom";

import { Card, CardBody, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { inventoriesData } from "data";
import { useLocalStateAlerts } from "hooks";

import { InventoryPanel } from "../panels";

export const InventoryDetailsPage = () => {
  const { id } = useParams();
  const inventoryId = parseInt(id);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [inventories] = useState(inventoriesData);
  const [inventory] = useState(inventories.find(e => parseInt(e.id) === inventoryId));

  const onSaveInventory = inventoryRequest => {
    const httpUpdateRequest = {
      id: inventoryRequest.id,
      body: inventoryRequest,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    setSuccessMessage("Inventory Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardBody>
                <InventoryPanel
                  inventoryText="Inventory Details"
                  inventory={inventory}
                  onSave={onSaveInventory}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
