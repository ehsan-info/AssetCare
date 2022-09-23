import { allAuthRoles } from "../utils";

import { METERS_PAGE, MetersPage } from ".";

export const metersPage = [
  {
    collapse: false,
    name: "Meters",
    path: METERS_PAGE,
    component: <MetersPage />,
    icon: "ni ni-user-run text-primary",
    layout: "/admin",
    key: "Meters",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
];
