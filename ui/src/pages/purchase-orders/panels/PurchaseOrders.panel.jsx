import moment from "moment";
import { useState } from "react";

import { Button, Col, Form, Row } from "reactstrap";

import { InputField, DateField } from "components/widgets";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

export const PurchaseOrdersPanel = ({ purchaseOrders, onSave }) => {
  const [onboardingDate, setOnboardingDate] = useState(
    purchaseOrders && moment(purchaseOrders.onboardingDate, DATE_FILTER_FORMAT)
  );

  const [offboardingDate, setOffboardingDate] = useState(
    purchaseOrders && moment(purchaseOrders.offboardingDate, DATE_FILTER_FORMAT)
  );

  const [roleId] = useState(purchaseOrders.roleId);
  const [groups] = useState(purchaseOrders.groups || []);

  const onSavePurchaseOrders = () => {
    const purchaseOrdersSaveRequest = {
      id: purchaseOrders.id,
      onboardingDate: moment(onboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      offboardingDate: moment(offboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      roleId,
      groups,
    };

    onSave(purchaseOrdersSaveRequest);
  };
  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Purchase Orders Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <DateField
              id="date-auto-onboarding-date"
              label="Onboard date"
              value={onboardingDate}
              setValue={setOnboardingDate}
            />
          </Col>
          <Col lg="6">
            <DateField
              id="date-auto-offboarding-date"
              label="Auto Offboard Date"
              value={offboardingDate}
              setValue={setOffboardingDate}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Purchase Orders Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-title"
              label="Title"
              value={purchaseOrders.title}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-poNumber"
              label="PO Number"
              value={purchaseOrders.poNumber}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-vendor"
              label="Vendor"
              value={purchaseOrders.vendor}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-numberOfItems"
              label="Number Of Items"
              value={purchaseOrders.numberOfItems}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-totalQuantity"
              label="Total Quantity"
              value={purchaseOrders.totalQuantity}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-totalCost"
              label="Total Cost"
              value={purchaseOrders.totalCost}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-addedBy"
              label="Added By"
              value={purchaseOrders.addedBy}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-dateAdded"
              label="Date Added"
              value={purchaseOrders.dateAdded}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-dueDate"
              label="Due Date"
              value={purchaseOrders.dueDate}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSavePurchaseOrders}>
            Update Purchase Orders
          </Button>
        </Row>
      </div>
    </Form>
  );
};
