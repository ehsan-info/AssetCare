import { CardImg, CardBody, CardTitle, CardText, Row, Col, Card } from "reactstrap";
export const CardViewDetails = props => {
  const detailTitle = "text-gray col-3";
  return (
    <>
      <Card>
        <CardImg top width="100%" src={props.CardImg} alt="Card image cap" />
        <CardBody>
          <CardTitle className="font-weight-bold">Asset</CardTitle>
          <CardText>
            <Row>
              <Col className={detailTitle}>ID</Col>
              <Col>{props.id}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Name</Col>
              <Col>{props.name}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Location</Col>
              <Col>{props.location}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Area</Col>
              <Col>{props.area}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Model</Col>
              <Col>{props.model}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Barcode</Col>
              <Col>{props.barcode}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Category</Col>
              <Col>{props.category}</Col>
            </Row>
            <Row>
              <Col className={detailTitle}>Assets Status</Col>
              <Col>{props.assetstatus}</Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};
