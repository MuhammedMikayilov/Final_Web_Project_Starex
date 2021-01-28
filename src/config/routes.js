import * as React from "react";
import { HomePage } from "@layouts";
import Test from "@layouts/Tariffs/index";

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

export const HeaderNavbar = [
  //Main Pages
  {
    //Root path
    path: "/",
    //Root name which renders in Header
    name: "Home",
    //If root is exact root
    isExact: true,
    isMainPage: true,
    //Root compoenent if it is main root
    component: (props) => <HomePage {...props} />,
  },

  {
    //Root path
    path: "/tariffs",
    //Root name which renders in Header
    name: "Tariflər",
    //If root is exact root
    isExact: true,
    isMainPage: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },

  //NavbarPages
  {
    //Root path
    path: "/about",
    //Root name which renders in Header
    name: "Haqqımızda",
    isHeader: true,
    //If root is exact root
    isExact: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/news",
    //Root name which renders in Header
    name: "Xəbərlər",
    isHeader: true,
    //If root is exact root
    isExact: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/faq",
    //Root name which renders in Header
    name: "Tez-tez verilən suallar",
    //If root is exact root
    isExact: true,
    isHeader: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/social-responsibility",
    //Root name which renders in Header
    name: "KSM",
    //If root is exact root
    isExact: true,
    isHeader: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/az",
    //Root name which renders in Header
    name: "Korporativ daşınmalar",
    //If root is exact root
    isExact: true,
    isHeader: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },

  {
    //Root path
    path: "/login",
    //Root name which renders in Header
    name: "Şəxsi Kabinet",
    //If root is exact root
    isExact: true,
    isLoginPanel: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/register",
    //Root name which renders in Header
    name: "Qeydiyyat",
    //If root is exact root
    isExact: true,
    isLoginPanel: true,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
];
