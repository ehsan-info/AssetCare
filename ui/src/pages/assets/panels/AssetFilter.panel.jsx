import React, { useState } from "react";

import { Row, Col, Button, Card } from "reactstrap";

import { SelectField } from "components/widgets";

export const AssetsFilter = props => {
  const [sortBy, setSortBy] = useState();

  return (
    <>
      <Card className="p-4">
        <Row>
          <Col className="col-1 pr-0">
            <Button className="border-light shadow-none text-black-50" color="white">
              <i className="fa fa-filter pr-2"></i>
              Filter
            </Button>
          </Col>
          {props.view === "card" ? (
            <Row className="col-10 pl-0">
              <Col className="col-2">
                <SelectField
                  className="mt-1"
                  icon="Sort By:"
                  value={sortBy}
                  options={[]}
                  onChange={item => {
                    setSortBy(item);
                  }}
                />
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Row>
      </Card>
    </>
  );
};
