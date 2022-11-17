import React, { useState } from "react";

import { Card, Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { InputField, SelectField, DateField, DragDrop } from "components/widgets";

import { selectAllBusinessUnitsDataAsSelectOptions } from "pages/utils";

import { AddPartModal } from "./AddPartModal.panel";

export const AddAsset = props => {
  const [parentAssetSelected, setParentAssetSelected] = useState();
  const [parentAssets] = useState(selectAllBusinessUnitsDataAsSelectOptions);
  const [purchaseDate, setPurchaseDate] = useState([]);
  const [placedInServiceDate, setPlacedInServiceDate] = useState([]);
  const [warrantyExpiration, setWarrantyExpiration] = useState([]);
  return (
    <>
      <Row>
        <Col>
          <Card className="border p-5 pt-6">
            <Form>
              <div className="d-flex justify-content-sm-between mb-4">
                <Button close onClick={props.onClose} id="closebtn" />
                <Button id="submitbtn" color="info" type="button" onClick={props.onSave}>
                  Submit
                </Button>
              </div>
              <div>
                <h2 className="mb-3">Add Asset</h2>
              </div>
              <DragDrop label="Add an Image" placeholder="Drag an image here" />
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-title" label="Title" type="text" placeholder="Asset" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-description" label="Discription" type="text" />
                </Col>
              </Row>
              <FormGroup check className="mb-4">
                <Label check>
                  <p>Track Check-in/Check-out</p>
                  <Input type="checkbox" />
                  Use AssetCare to track and manage check-ins and check-outs for this asset.
                </Label>
              </FormGroup>
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-type" label="Type" type="text" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-barcode" label="Barcode" type="text" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-category" label="Category" type="text" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-location" label="Location" type="text" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <InputField id="input-area" label="Area" type="text" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-parentasset"
                    label="Parent Asset"
                    value={parentAssetSelected}
                    options={parentAssets}
                    onChange={item => {
                      setParentAssetSelected(item);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-worker"
                    label="Worker"
                    value={parentAssetSelected}
                    options={parentAssets}
                    onChange={item => {
                      setParentAssetSelected(item);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-additionalworker"
                    label="Additional Worker"
                    value={parentAssetSelected}
                    options={parentAssets}
                    onChange={item => {
                      setParentAssetSelected(item);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-team"
                    label="Team"
                    value={parentAssetSelected}
                    options={parentAssets}
                    onChange={item => {
                      setParentAssetSelected(item);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-vendors"
                    label="Vendors"
                    value={parentAssetSelected}
                    options={parentAssets}
                    onChange={item => {
                      setParentAssetSelected(item);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SelectField
                    id="select-customers"
                    label="Customers"
                    value={parentAssetSelected}
                    options={parentAssets}
                    onChange={item => {
                      setParentAssetSelected(item);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DateField
                    id="purchase-date"
                    inputProps={{
                      placeholder: "Select date",
                    }}
                    label="Purchase Date"
                    value={purchaseDate}
                    setValue={setPurchaseDate}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DateField
                    id="placed-in-service-date"
                    inputProps={{
                      placeholder: "Select date",
                    }}
                    label="Placed in Service"
                    value={placedInServiceDate}
                    setValue={setPlacedInServiceDate}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputField id="purchase-price" label="Purchase Price" type="number" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DateField
                    id="warranty-expiration"
                    inputProps={{
                      placeholder: "Select date",
                    }}
                    label="Warranty Expiration"
                    value={warrantyExpiration}
                    setValue={setWarrantyExpiration}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputField id="residual-price" label="Residual Price" type="text" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputField id="useful-life" label="Useful Life" type="number" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputField
                    id="additional-information"
                    label="Additonal Information"
                    type="textarea"
                    rows="5"
                  />
                </Col>
              </Row>
              <DragDrop label="Add a file" placeholder="File Drop Box" />
              <Row>
                <Col>
                  <i className="fa fa-plus text-info mr-1" aria-hidden="true"></i>
                  <a href="#" className="text-info">
                    Add Uploaded File
                  </a>
                </Col>
              </Row>
              <div className="mt-4">
                <p>Parts</p>
                <AddPartModal />
                <Row className="pl-3 mt-3">
                  <Col>
                    <Row className="mt-3">
                      <Col>
                        <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                        <a href="#" className="">
                          Custom Data
                        </a>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                        <a href="#" className="">
                          Template
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <div className="d-flex justify-content-sm-between pr-4 mb-4 mt-6 float-right">
                <Button onClick={props.onClose}>Cancle</Button>
                <Button id="submitbtn" color="info" type="submit" onClick={props.onSave}>
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
