import { useNavigate } from "react-router";

import { CardImg, CardBody, CardTitle, CardText, Row, Col, Card, Button } from "reactstrap";

import { ASSET_DETAILS } from "../assets.routes.const";
export const CardViewDetails = props => {
  const navigate = useNavigate();
  const { image, model, name } = props;

  const onViewAssetDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${ASSET_DETAILS}/${id}`);
  };
  return (
    <>
      <Card>
        <CardBody className="d-block text-center">
          <Row className="card-wrapper">
            <Col md="3" />
            <Col md="6" class="mx-auto">
              <Card className=" d-flex justify-content-center">
                <CardImg alt="..." src={image} top />
                <CardBody style={{ height: "13em" }}>
                  <CardTitle className="mb-3 text-center" tag="h3">
                    {name}
                  </CardTitle>
                  <CardText className="mb-4">
                    <Row className="justify-content-center">
                      <Col lg="12">{model}</Col>
                    </Row>
                  </CardText>
                  <Button id="2" color="primary" onClick={onViewAssetDetails}>
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
