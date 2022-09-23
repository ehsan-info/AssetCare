import { allAuthRoles } from "../utils";

import { WorkOrdersPage, WORK_ORDERS_PAGE } from ".";

export const workOrdersMenu = [
  {
    collapse: true,
    name: "Work Orders",
    path: WORK_ORDERS_PAGE,
    component: <WorkOrdersPage />,
    icon: "ni ni-single-copy-04 text-primary",
    layout: "/admin",
    key: "WorkOrders",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 1,
  },
];
