import { useState } from "react";

import { Col, Form, Row } from "reactstrap";

import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { SELECT_ALL } from "common/consts";
// import { formatJsDate_DD_MM_YYYY } from "common/utils";

export const SearchCustomersFilterPanel = ({ addresses, phones, emails, websites, onSearch }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressSelected, setAddressSelected] = useState(SELECT_ALL);
  const [phoneSelected, setPhoneSelected] = useState(SELECT_ALL);
  const [emailSelected, setEmailSelected] = useState(SELECT_ALL);
  const [websiteSelected, setWebsiteSelected] = useState(SELECT_ALL);
  console.log(setSubmitting);

  const resetFilters = () => {
    setAddressSelected(SELECT_ALL);
    setPhoneSelected(SELECT_ALL);
    setEmailSelected(SELECT_ALL);
    setWebsiteSelected(SELECT_ALL);
  };

  const search = () => {
    const filters = parametersToFilter();
    setSubmitting(true);
    onSearch(filters);
  };

  const updateFilterWithCurrentSelection = (field, filters, fieldName) => {
    if (field && field.value && field.label !== SELECT_ALL.label) {
      filters[fieldName] = parseInt(field.value);
    }
  };

  // const updateFilterWithCurrentDate = (field, filters, fieldName) => {
  //   if (field) {
  //     filters[fieldName] = formatJsDate_DD_MM_YYYY(field);
  //   }
  // };

  const parametersToFilter = () => {
    const queryCustomerFilters = {};
    if (lastName) {
      queryCustomerFilters.lastName = lastName;
    }
    updateFilterWithCurrentSelection(addressSelected, queryCustomerFilters, "addressId");
    updateFilterWithCurrentSelection(phoneSelected, queryCustomerFilters, "phoneId");
    updateFilterWithCurrentSelection(emailSelected, queryCustomerFilters, "emailId");
    updateFilterWithCurrentSelection(websiteSelected, queryCustomerFilters, "websiteId");
    return queryCustomerFilters;
  };

  return (
    <>
      <Form>
        <FilterPanel
          title="Search Customers"
          resetFilters={resetFilters}
          isSubmitting={isSubmitting}
          onSearch={search}
        >
          <Row>
            <Col md="3">
              <InputField
                id="input-first-name"
                label="First name"
                style={{ height: "36px" }}
                className="form-control"
                value={firstName}
                placeholder="First Name"
                type="text"
                onChange={e => setFirstName(e.target.value)}
              />
            </Col>
            <Col md="3">
              <InputField
                id="input-last-name"
                label="Last name"
                style={{ height: "36px" }}
                className="form-control"
                value={lastName}
                placeholder="Last Name"
                type="text"
                onChange={e => setLastName(e.target.value)}
              />
            </Col>
            <Col md="3">
              <DateField
                id="date-hire-from"
                label="Hire Date From"
                style={{ height: "32px" }}
                // value={}
                // setValue={}
              />
            </Col>
            <Col md="3">
              <DateField
                id="date-hire-to"
                label="Hire Date To"
                style={{ height: "32px" }}
                // value={searchHiringDateTo}
                // setValue={setSearchHiringDateTo}
              />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <SelectField
                id="select-addresses"
                label="Address"
                value={addressSelected}
                options={addresses}
                onChange={item => {
                  setAddressSelected(item);
                }}
              />
            </Col>
            <Col md="3">
              <SelectField
                id="select-phones"
                label="Phone Number"
                value={phoneSelected}
                options={phones}
                onChange={item => {
                  setPhoneSelected(item);
                }}
              />
            </Col>
            <Col md="3">
              <SelectField
                id="select-emails"
                label="Email"
                value={emailSelected}
                options={emails}
                onChange={item => {
                  setEmailSelected(item);
                }}
              />
            </Col>
            <Col md="3">
              <SelectField
                id="select-websites"
                label="Website"
                value={websiteSelected}
                options={websites}
                onChange={item => {
                  setWebsiteSelected(item);
                }}
              />
            </Col>
          </Row>
        </FilterPanel>
      </Form>
    </>
  );
};
