import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Card, CardBody, Container, Row, CardHeader } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { locationsData } from "data/locations";

import { LocationHeader } from "../components/LocationHeader";
import { LOCATION_DETAILS } from "../locations.routes.const";

import { locationsTableColumns } from "./Locations.table";

export const LocationsPage = () => {
  const navigate = useNavigate();

  const [locations] = useState(locationsData);

  const onViewLocationsDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${LOCATION_DETAILS}/${id}`);
  };

  const onDeleteLocation = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete location", id);
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Location Page</h3>
              </CardHeader>
              <CardBody>
                <BoxHeader />
                <Container className="mt--6" fluid>
                  <Row>
                    <div className="col">
                      <Card>
                        <CardHeader>
                          <h3 className="mb-0">Locations</h3>
                          <p className="text-sm mb-0">Locations list</p>
                        </CardHeader>
                        <LocationHeader />
                        <ReactTable
                          data={locations}
                          columns={locationsTableColumns({
                            onDetailsButtonClick: onViewLocationsDetails,
                            onRemoveButtonClick: onDeleteLocation,
                          })}
                        />
                      </Card>
                    </div>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};