import { useSelector } from "react-redux";

import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  const customer_vendor = useSelector(state => state.customer_vendor);
  return (
    <>
      {customer_vendor === "customers" ? (
        <Input
          className="react-table-search m-0 d-inline rounded-pill"
          placeholder="🔍  Search Customers"
          value={filter || ""}
          onChange={e => setFilter(e.target.value)}
        />
      ) : (
        <Input
          className="react-table-search d-inline rounded-pill"
          placeholder="🔍  Search Vendors"
          value={filter || ""}
          onChange={e => setFilter(e.target.value)}
        />
      )}
    </>
  );
};
