import { useState } from "react";

import { Row, Col } from "reactstrap";

import { assetsData } from "data";

import { CardViewDetails } from "./CardView.details";

export const CardViewPanel = () => {
  const [assets] = useState(assetsData);

  return (
    <>
      <Row>
        {assets.map(asset => (
          <Col sm="3">
            <CardViewDetails
              detailId={asset.id}
              name={asset.name}
              location={asset.location}
              area={asset.area}
              model={asset.model}
              barcode={asset.barcode}
              category={asset.category}
              assetStatus={asset.assetStatus}
              image={asset.image}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
