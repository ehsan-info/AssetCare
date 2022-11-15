import { useState } from "react";

import { Button, Col, Row } from "reactstrap";

import { SelectField, InputField } from "components/widgets";

import { selectAllCountriesDataAsSelectOptions } from "pages/utils";

import { workersData, teamsData, vendorsData, customersData } from "data";
import { useLocalStateAlerts } from "hooks";

const initialLocations = {
  title: "",
  address: "",
  parentLocation: [],
  workers: [],
  team: [],
  vendors: [],
  customers: [],
};

export const LocationForm = ({ locationItem }) => {
  const handledLocationItem = locationItem && {
    ...locationItem,
    title: locationItem.locationName,
  };
  const [locations, setLocations] = useState(handledLocationItem || initialLocations);
  const [countries] = useState(selectAllCountriesDataAsSelectOptions);
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onSaveGroup = () => {
    setSuccessMessage("Location added");
    setIsSuccess(true);
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <h6 className="heading-small text-muted mb-4">Location information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="10">
            <InputField
              invalid={!locations.title}
              value={locations.title}
              label="Title *"
              placeholder="Enter Location Name"
              type="text"
              onChange={e =>
                setLocations({
                  ...locations,
                  title: e.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <InputField
              value={locations.address}
              label="Address"
              placeholder="Enter Location Address"
              type="text"
              onChange={e =>
                setLocations({
                  ...locations,
                  address: e.target.value,
                })
              }
            />
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <SelectField
              label="Parent Location"
              placeholder="Choose from existing Location"
              isMulti
              value={locations.parentLocation}
              options={countries}
              onChange={item => {
                return setLocations({
                  ...locations,
                  parentLocation: item,
                });
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="10">
            <SelectField
              label="Worker"
              placeholder="Select Users"
              isMulti
              value={locations.workers}
              options={workersData}
              onChange={item => {
                return setLocations({
                  ...locations,
                  workers: item,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <SelectField
              label="Team"
              placeholder="Select Teams"
              isMulti
              value={locations.team}
              options={teamsData}
              onChange={item => {
                return setLocations({
                  ...locations,
                  team: item,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <SelectField
              label="Vendor"
              placeholder="Select Vendors"
              isMulti
              value={locations.vendors}
              options={vendorsData}
              onChange={item => {
                return setLocations({
                  ...locations,
                  vendors: item,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <SelectField
              label="Customer"
              placeholder="Select Customers"
              isMulti
              value={locations.customers}
              options={customersData}
              onChange={item => {
                return setLocations({
                  ...locations,
                  customers: item,
                });
              }}
            />
          </Col>
        </Row>
      </div>

      <Row className="align-items-center py-10">
        <Col md="9" xs="7" className="text-right">
          <Button
            className="btn btn-secondary"
            color="secondary"
            onClick={() => {
              setLocations(initialLocations);
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col md="1" xs="7" className="text-right">
          <Button disabled={!locations.title} color="success" onClick={onSaveGroup}>
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};
