import { allAuthRoles } from "../utils";

import { PURCHASE_ORDERS_PAGE, PurchaseOrdersPage } from ".";

export const purchaseOrdersPage = [
  {
    collapse: false,
    name: "Purchase Orders",
    path: PURCHASE_ORDERS_PAGE,
    component: <PurchaseOrdersPage />,
    icon: "ni ni-money-coins text-primary",
    layout: "/admin",
    key: "PurchaseOrders",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
];
