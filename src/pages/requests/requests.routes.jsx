import { allAuthRoles } from "../utils";

import { REQUESTS_PAGE, RequestsPage } from ".";

export const requestPage = [
  {
    collapse: false,
    name: "Requests",
    path: REQUESTS_PAGE,
    component: <RequestsPage />,
    icon: "ni ni-send text-info",
    layout: "/admin",
    key: "Requests",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 1,
  },
];
