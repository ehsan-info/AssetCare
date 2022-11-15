import { allAuthRoles } from "../utils";

import { LocationDetailsPage } from "./location-details";
import { LocationMap } from "./location-map-view";
import { LOCATION_DETAILS, LOCATION_MAP } from "./locations.routes.const";

import { LOCATIONS_PAGE, LocationsPage } from ".";

export const locationPage = [
  {
    collapse: false,
    name: "Locations",
    path: LOCATIONS_PAGE,
    component: <LocationsPage />,
    icon: "ni ni-square-pin text-primary",
    layout: "/admin",
    key: "Locations",
    allowedRoles: [...allAuthRoles],
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    path: `${LOCATION_DETAILS}/:id`,
    component: <LocationDetailsPage />,
    layout: "/admin",
    name: `${LOCATION_DETAILS}/:id`,
    key: `Locations/${LOCATION_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },

  {
    collapse: false,
    global: true,
    path: `${LOCATION_MAP}`,
    component: <LocationMap />,
    layout: "/admin",
    name: `${LOCATION_MAP}`,
    key: `Users/${LOCATION_MAP}`,
    allowedRoles: [...allAuthRoles],
  },
];
