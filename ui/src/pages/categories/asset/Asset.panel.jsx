import { useState } from "react";

import { Card, CardBody, CardHeader, Container } from "reactstrap";

import { assetCategoriesData } from "data/categories";
import { useLocalStateAlerts } from "hooks";

export const AssetCategoryPanel = () => {
  const [assetCategories, setAssetCategories] = useState(assetCategoriesData);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onDeleteAssetCategory = id => {
    console.log("asset category deleted", id);
    setSuccessMessage("Asset category deleted");
    setIsSuccess(true);
    setSaveSent(true);
    setAssetCategories(assetCategories.filter(e => e.id !== parseInt(id)));
  };

  return (
    <>
      {alert}
      <Container className="mt--6" fluid>
        <Card className="mb-4">
          <CardHeader>
            <h2 className="mb-0">Asset Categories</h2>
          </CardHeader>
          {assetCategories.length ? (
            assetCategories.map(({ name, id }) => (
              <CardBody className="border-top border-bottom border-radius d-flex justify-content-between">
                <h3 className="mb-0">{name}</h3>
                <i
                  className="far fa-trash-alt mt-1  pr-2"
                  aria-hidden="true"
                  onClick={() => onDeleteAssetCategory(id)}
                ></i>
              </CardBody>
            ))
          ) : (
            <CardBody className="border-top border-bottom border-radius">
              <h3 className="mb-0">
                Looks like you don&apos;t have any purchase order categories yet.
              </h3>
              <h4 className="mb-0 text-muted">Press the `+` button to add your first category.</h4>
            </CardBody>
          )}
        </Card>
      </Container>
    </>
  );
};
