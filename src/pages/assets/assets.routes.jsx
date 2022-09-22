import { allAuthRoles } from "../utils";

import { ASSETS_PAGE, AssetsPage } from ".";

export const assetsPage = [
  {
    collapse: false,
    name: "Assets",
    path: ASSETS_PAGE,
    component: <AssetsPage />,
    icon: "ni ni-app text-info",
    layout: "/admin",
    key: "Categories",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
];
