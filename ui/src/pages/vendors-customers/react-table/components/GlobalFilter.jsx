import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Input
      className="react-table-search d-inline rounded-pill h-50 btn-sm w-100 fs-6 inputGroup-sizing-sm"
      placeholder="🔍  Search Customers"
      value={filter || ""}
      onChange={e => setFilter(e.target.value)}
    />
  );
};
