import { allAuthRoles } from "../utils";

import { PEOPLE_TEAMS_PAGE, PeopleAndTeamsPage, PEOPLE_DETAILS, PeopleDetailsPage } from ".";

export const peopleTeamsPage = [
  {
    collapse: false,
    name: "People & Teams",
    path: PEOPLE_TEAMS_PAGE,
    component: <PeopleAndTeamsPage />,
    icon: "ni ni-badge text-info",
    layout: "/admin",
    key: "PeoplesTeams",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 3,
  },
  {
    collapse: false,
    global: true,
    path: `${PEOPLE_DETAILS}/:id`,
    component: <PeopleDetailsPage />,
    layout: "/admin",
    name: `${PEOPLE_DETAILS}/:id`,
    key: `PeopleTeams/${PEOPLE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
