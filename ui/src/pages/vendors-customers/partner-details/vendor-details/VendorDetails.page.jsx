import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { VendorPanel } from "pages/vendors-customers/panels";
import { VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers/vendorsCustomers.routes.const";

import { vendorsData } from "data/vendors";
import { useLocalStateAlerts } from "hooks";

export const VendorDetailsPage = () => {
  const { id } = useParams();
  const vendorId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [vendor] = useState(vendorsData.find(e => e.id === vendorId));

  const onSaveVendor = () => {
    console.log("update vendor", vendorId, vendor);
    setSuccessMessage("Vendor Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };

  const onBackToSearchClick = () => {
    navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <VendorPanel
          vendor={vendor}
          onSave={onSaveVendor}
          onBackToSearchClick={onBackToSearchClick}
        />
      </Container>
    </>
  );
};
