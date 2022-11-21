import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { InputField } from "components/widgets";

export const AssetDetailsPanel = ({ asset, onSave, onBackToSearchClick }) => {
  console.log(asset);

  const { name, location, area, model, barcode, category, assetStatus } = asset;

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardBody>
            <>
              <h4 className="heading-small text-muted mb-4">Asset information</h4>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-name"
                      label="Name"
                      defaultValue={name}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="10">
                    <InputField
                      id="location"
                      label="Location"
                      defaultValue={location}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="area"
                      label="Area"
                      defaultValue={area}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="model"
                      label="Model"
                      defaultValue={model}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="barcode"
                      label="Barcode"
                      defaultValue={barcode}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                  <Col lg="10">
                    <InputField
                      id="category"
                      label="Category"
                      defaultValue={category}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <InputField
                      id="assetStatus"
                      label="Asset Status"
                      defaultValue={assetStatus}
                      type="text"
                      disabled={true}
                    />
                  </Col>
                </Row>
              </div>
              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <div className="pl-lg-4">
                    <Row>
                      <Button color="primary" onClick={onSave}>
                        Save
                      </Button>
                      <Button color="info" onClick={onBackToSearchClick}>
                        Back to Search
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
