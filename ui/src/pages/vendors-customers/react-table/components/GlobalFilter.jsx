import { useSelector } from "react-redux";

import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  const customer_vendor = useSelector(state => state.customer_vendor);
  return (
    <>
      {customer_vendor === "customers" ? (
        <Input
          className="react-table-search d-inline rounded-pill h-50 btn-sm w-100 fs-6 inputGroup-sizing-sm"
          placeholder="🔍  Search Customers"
          value={filter || ""}
          onChange={e => setFilter(e.target.value)}
        />
      ) : (
        <Input
          className="react-table-search d-inline rounded-pill h-50 btn-sm w-100 fs-6 inputGroup-sizing-sm"
          placeholder="🔍  Search Vendors"
          value={filter || ""}
          onChange={e => setFilter(e.target.value)}
        />
      )}
    </>
  );
};
