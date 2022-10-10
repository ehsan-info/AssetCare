// import { IconContext } from "react-icons";
// import { BiBell } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { TbBulb } from "react-icons/tb";

// import { Card, Row } from "reactstrap";

import { ReactTable } from "../../react-table";
// import { CUSTOMER_CREATE } from "../customer.routes.consts";

import { customersTableColumns } from "./SearchCustomers.table";

export const SearchCustomersPanel = ({ customers }) => {
  // export const SearchCustomersPanel = ({ customers, onDelete, onViewDetails }) => {
  console.log("!!!", customers);
  // export const SearchCustomersPanel = ({ customers, navigateToPanel, onDelete, onViewDetails }) => {
  // const onViewCustomerDetails = e => {
  //   e.preventDefault();
  //   const { id } = e.currentTarget;
  //   onViewDetails(parseInt(id));
  // };

  // const onDeleteCustomer = async e => {
  //   e.preventDefault();
  //   const { id } = e.currentTarget;
  //   onDelete(parseInt(id));
  // };

  // const onCreateNewCustomer = async e => {
  //   e.preventDefault();
  //   navigateToPanel(CUSTOMER_CREATE);
  // };

  return (
    <>
      {/* <Row>
        <div className="col">
          <Card> */}
      {/* <CardHeader>
              <Row>
                <Col md="3">
                  <h3 className="col">Vendors & Customers</h3>
                </Col>

                <Col md={{ offset: 7 }} className="col">
                  <IconContext.Provider value={{ color: "676C6D", size: "20px" }}>
                    <div>
                      <TbBulb className="m-1" role="button" />
                      <BiBell className="m-1" role="button" />
                      <CgProfile className="m-1" role="button" />
                    </div>
                  </IconContext.Provider>
                </Col>
              </Row>
            </CardHeader> */}
      {/* <Row>
              <Col md="3">
                <ButtonGroup aria-label="Basic example" role="group">
                  <Button className="m-2 border border-grey rounded" color="#F7F7F9" type="button">
                    Vendors
                  </Button>
                  <Button className="m-2 border border-grey rounded" color="#F7F7F9" type="button">
                    Consumers
                  </Button>
                </ButtonGroup>
              </Col>

              <Col md="4"></Col>
              <Col md="3">
                <FormGroup className="d-flex m-2">
                  <IconContext.Provider
                    md=""
                    value={{ color: "676C6D", size: "30px", padding: "33px" }}
                  >
                    <div>
                      <GoKebabVertical
                        className="m-2 p-1 border border-grey rounded"
                        role="button"
                      />
                    </div>
                  </IconContext.Provider>
                  
                </FormGroup>
              </Col>
            </Row> 
            <Button
              className="btn btn-primary rounded-pill"
              style={{ width: "8rem" }}
              color="primary"
              onClick={onCreateNewCustomer}
            >
              + Customer
            </Button> */}
      <ReactTable
        className="mt-n100"
        data={customers}
        columns={customersTableColumns({
          // onDetailsButtonClick: onViewCustomerDetails,
          // onRemoveButtonClick: onDeleteCustomer,
        })}
      />
      {/* </Card>
        </div>
      </Row> */}
    </>
  );
};
