import { initState } from "../initState";

export const customerVendorReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_FIELD":
      return payload;
    default:
      return state;
  }
};
