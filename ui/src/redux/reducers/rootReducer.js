import { combineReducers } from "redux";

import { customerVendorReducer } from "./customerVendorReducer";

export const rootReducer = combineReducers({
  customer_vendor: customerVendorReducer,
});
