import { useState } from "react";

import { Card, CardBody, Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import { InventoryPanel } from "..";

export const CreateInventoryPage = () => {
  const initialState = {
    id: CREATE_ENTITY_ID,
    name: "",
    quantity: "",
    cost: "",
    barcode: "",
    area: "",
    description: "",
    location: "",
  };

  const [inventory] = useState(initialState);

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onCreateInventory = inventorySaveRequest => {
    const httpUpdateRequest = {
      id: inventorySaveRequest.id,
      body: inventorySaveRequest,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    setSuccessMessage("Inventory Created");
    setIsSuccess(true);
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Card>
          <CardBody>
            <InventoryPanel
              inventoryText={"Add inventory"}
              inventory={inventory}
              onSave={onCreateInventory}
            />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
