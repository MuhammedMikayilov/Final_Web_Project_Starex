import * as React from "react";
import {HomePage, Test} from "@layouts";

//Main API url
export const CRM_API_URL = "https://crm.besfly.com";
//Main API_FILE url
export const API_URL_FILES = "https://files.fogito.com";
//Main PANEL_API_FILE url
// export const ADMIN_API_URL = "https://administration.fogito.com";

export const API_ROUTES = {
  //Files
  filesUpload: API_URL_FILES + "/file/upload",

  //Settings
  settings: CRM_API_URL + "/settings/account",
  translations: CRM_API_URL + "/settings/translations",
};

export const MENU_ROUTES = [
  {
    //Root path
    path: "/",
    //Root name which renders in Header
    name: "Test",
    //Root icon - reuired - icon or svg element
    icon: <i className="feather feather-award text-warning" />,
    //If root is exact root
    isExact: true,
    //Root compoenent if it is main root
    component: (props) => <HomePage {...props} />
  },
];
