import { EditCustomersPanel } from "../common/EditCustomer.panel";

export const CustomerDetailsPanel = ({ customer, onSave, navigateToPanel }) => {
  return (
    <>
      <EditCustomersPanel
        customer={customer}
        onSave={onSave}
        title="Customer Details"
        navigateToPanel={navigateToPanel}
      />
    </>
  );
};
