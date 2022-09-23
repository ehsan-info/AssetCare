import { allAuthRoles } from "../utils";

import { PARTS_INVENTORY_PAGE, PartsInventoryPage } from ".";

export const partsInventoryPage = [
  {
    collapse: false,
    name: "Parts/Inventory",
    path: PARTS_INVENTORY_PAGE,
    component: <PartsInventoryPage />,
    icon: "ni ni-key-25 text-primary",
    layout: "/admin",
    key: "PartsInventory",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
];
