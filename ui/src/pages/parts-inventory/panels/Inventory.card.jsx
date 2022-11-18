import { Card, CardBody, Row, Col, CardImg, CardTitle, CardText, Button } from "reactstrap";

import noImage from "assets/img/care/no-img.jpg";

export const InventoryCard = ({ data, onViewDetailsClick }) => {
  return (
    <Card>
      <CardBody className="d-block text-center">
        {data.map(inventory => (
          <Row className="card-wrapper" key={inventory.id}>
            <Col md="3" />
            <Col md="6" class="mx-auto">
              <Card className=" d-flex justify-content-center">
                <CardImg alt="..." src={noImage} top />
                <CardBody style={{ height: "13em" }}>
                  <CardTitle className="mb-3 text-center" tag="h3">
                    {inventory.name}
                  </CardTitle>
                  <CardText className="mb-4">
                    <Row className="justify-content-center">
                      <Col lg="12">{inventory.description}</Col>
                    </Row>
                  </CardText>
                  <Button id="2" color="primary" onClick={e => onViewDetailsClick(e)}>
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
      </CardBody>
    </Card>
  );
};
