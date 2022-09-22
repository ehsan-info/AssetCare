/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { documentsData } from "data";

import { DocumentHighlightsPanel } from "../document-panels";
import { DOCUMENT_DETAILS } from "../documents.routes.const";

import { documentsTableColumns, SearchDocumentsFilterPanel } from ".";

export const SearchDocumentsPage = () => {
  const navigate = useNavigate();

  const [alert] = useState(null);

  const [documents] = useState(documentsData);

  const onSearchDocuments = filters => {
    console.log("searchDocuments", filters);
  };

  const onDeleteDocument = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("deleteDocument", id);
  };

  const onViewDocumentDetails = e => {
    const { id } = e.currentTarget;
    navigate(`/admin${DOCUMENT_DETAILS}/${id}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper" lg="12">
            <DocumentHighlightsPanel onViewDetailsClick={onViewDocumentDetails} />
          </Col>
        </Row>

        <Row>
          <div className="col">
            <SearchDocumentsFilterPanel onSearch={onSearchDocuments} />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search results</h3>
              </CardHeader>

              <ReactTable
                data={documents}
                columns={documentsTableColumns({
                  onDetailsButtonClick: onViewDocumentDetails,
                  onRemoveButtonClick: onDeleteDocument,
                })}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
