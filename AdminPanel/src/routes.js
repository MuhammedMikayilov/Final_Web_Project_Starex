/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import NewsList from "views/layouts/components/NewsList.js";
import UserProfile from "views/UserProfile.js";
import IntroSection from "./views/layouts/components/IntroSection";
import HowWorkSection from "./views/layouts/components/HowWorkSection";
import CountrySection from "./views/layouts/components/CountrySection";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/intro",
    name: "Intro",
    icon: "tim-icons icon-puzzle-10",
    component: IntroSection,
    layout: "/admin",
  },
  {
    path: "/news",
    name: "News List",
    icon: "tim-icons icon-puzzle-10",
    component: NewsList,
    layout: "/admin",
  },
  {
    path: "/works",
    name: "How To Works",
    rtlName: "طباعة",
    icon: "tim-icons icon-puzzle-10",
    component: HowWorkSection,
    layout: "/admin",
  },
  {
    path: "/country",
    name: "Countries",
    rtlName: "طباعة",
    icon: "tim-icons icon-puzzle-10",
    component: CountrySection,
    layout: "/admin",
  },
];
export default routes;
