import { allAuthRoles } from "../utils";

import { FILES_PAGE, FilesPage } from ".";

export const filesPage = [
  {
    collapse: false,
    name: "Files",
    path: FILES_PAGE,
    component: <FilesPage />,
    icon: "ni ni-folder-17 text-primary",
    layout: "/admin",
    key: "Files",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 4,
  },
];
