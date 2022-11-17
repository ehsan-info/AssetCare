import { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Row,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { InputField } from "components/widgets";

import { AssetCategoryPanel } from "./asset/Asset.panel";
import { ASSET_MAIN } from "./asset/asset.routes.consts";
import { METER_MAIN } from "./meter/meter.routes.consts";
import { MeterCategoryPanel } from "./meter/MeterCategory.panel";
import { PURCHASE_ORDERS_MAIN } from "./purchase-orders/purchase-orders.routes.consts";
import { PurchaseOrderCategoryPanel } from "./purchase-orders/PurchaseOrders.panel";
import { TIMER_MAIN } from "./timer/timer.routes.consts";
import { TimerCategoryPanel } from "./timer/TimerCategory.panel";
import { WORK_ORDERS_CATEGORY_MAIN } from "./work-orders/work-orders.routes.consts";
import { WorkOrdersCategoryPanel } from "./work-orders/WorkOrdersCategory.panel";

export const CategoriesPage = () => {
  const [activeTab, setActiveTab] = useState(WORK_ORDERS_CATEGORY_MAIN);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <BoxHeader />
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add a new Category</ModalHeader>
        <ModalBody>
          <InputField />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Categories Page</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="1">&nbsp;</Col>
                  <Col lg="9" className="d-flex flex-column justify-content-end">
                    <FormGroup>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(WORK_ORDERS_CATEGORY_MAIN)}
                      >
                        Work Orders
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(METER_MAIN)}
                      >
                        Meter
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(TIMER_MAIN)}
                      >
                        Timer
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(PURCHASE_ORDERS_MAIN)}
                      >
                        Purchase Orders
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={() => setActiveTab(ASSET_MAIN)}
                      >
                        Asset
                      </Button>
                    </FormGroup>
                  </Col>
                  <Col lg="2" className="">
                    <FormGroup>
                      <Button color="primary" type="button" onClick={toggleModal}>
                        + Category
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardBody>
                <br />
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={METER_MAIN}>
                    <MeterCategoryPanel />
                  </TabPane>
                  <TabPane tabId={ASSET_MAIN}>
                    <AssetCategoryPanel />
                  </TabPane>
                  <TabPane tabId={TIMER_MAIN}>
                    <TimerCategoryPanel />
                  </TabPane>
                  <TabPane tabId={PURCHASE_ORDERS_MAIN}>
                    <PurchaseOrderCategoryPanel />
                  </TabPane>
                  <TabPane tabId={WORK_ORDERS_CATEGORY_MAIN}>
                    <WorkOrdersCategoryPanel />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
