import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Input
      className="react-table-search rounded-pill"
      placeholder="🔍 Search Customer"
      value={filter || ""}
      onChange={e => setFilter(e.target.value)}
    />
  );
};
