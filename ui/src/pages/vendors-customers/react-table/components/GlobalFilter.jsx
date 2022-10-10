import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Input
      className="react-table-search rounded-pill h-50 btn-sm w-200 fs-6 inputGroup-sizing-sm"
      placeholder="🔍  Search Customers"
      value={filter || ""}
      onChange={e => setFilter(e.target.value)}
    />
  );
};
