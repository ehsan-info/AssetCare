import { allAuthRoles } from "../utils";

import { EmployeeDetailsPage, EMPLOYEE_DETAILS, EMPLOYEE_SEARCH, SearchEmployeesPage } from ".";

export const userMenu = [
  {
    collapse: false,
    path: EMPLOYEE_SEARCH,
    name: "Employees",
    miniName: "E",
    component: <SearchEmployeesPage />,
    layout: "/admin",
    key: "Users/Employees",
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${EMPLOYEE_DETAILS}/:id`,
    component: <EmployeeDetailsPage />,
    layout: "/admin",
    name: `${EMPLOYEE_DETAILS}/:id`,
    key: `Users/${EMPLOYEE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
