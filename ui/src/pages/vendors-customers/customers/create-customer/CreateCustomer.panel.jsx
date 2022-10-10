import { EditCustomersPanel } from "../common/EditCustomer.panel";

export const CreateCustomerPanel = ({ onSaveNewCustomer, navigateToPanel }) => {
  let customer = {};

  return (
    <>
      <EditCustomersPanel
        customer={customer}
        onSave={onSaveNewCustomer}
        title="Create New Customer"
        navigateToPanel={navigateToPanel}
      />
    </>
  );
};
