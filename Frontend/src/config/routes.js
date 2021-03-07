import * as React from "react";
import { HomePage } from "@layouts";
import Tariffs from "@layouts/Pages/Tariffs";
import Stores from "@layouts/Pages/Stores";
import News from "@layouts/Pages/News";
import Test from "@layouts/Pages/Tariffs/Test";
import NewsDetail from "@layouts/Pages/News/Details/Detail";
import Services from "@layouts/Pages/Services";
import Register from "@layouts/Pages/LoginForm/components/Register";
import Login from "@layouts/Pages/LoginForm/components/Login";
import Contact from "@layouts/Pages/Contact";
import Cabinet from "@layouts/Cabinet";

export const APILINK = "http://localhost:50725/api"

export const  API_ROUTES = {
  newsList: APILINK + "/news"
}

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

  //NavbarPages
  {
    //Root path
    path: "/about",
    //Root name which renders in Header
    name: "Haqqımızda",
    isHeader: false,
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 1,
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
    index: 0,
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
    index: 0,
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
    index: 0,
    //Root compoenent if it is main root
    component: (props) => <Login {...props} />

  },
  {
    //Root path
    path: "/register",
    //Root name which renders in Header
    name: "Qeydiyyat",
    //If root is exact root
    isExact: true,
    isLoginPanel: true,
    index: 0,
    //Root compoenent if it is main root
    component: (props) => <Register {...props} />
  },

  //  Navbars Pages
  {
    //Root path
    path: "/tariffs",
    //Root name which renders in Header
    name: "Tariflər",
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 2,
    //Root compoenent if it is main root
    component: (props) => <Tariffs {...props} />,
  },

  {
    //Root path
    path: "/transportation-terms",
    //Root name which renders in Header
    name: "Daşıma şərtləri",
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 3,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/shops",
    //Root name which renders in Header
    name: "Mağazalar",
    index: 4,
    //If root is exact root
    isExact: true,
    isNavbar: true,
    //Root compoenent if it is main root
    component: (props) => <Stores {...props} />,
  },
  {
    //Root path
    path: "/news",
    //Root name which renders in Header
    name: "Xəbərlər",
    isHeader: true,
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 5,
    //Root compoenent if it is main root
    component: (props) => <News {...props} />,
  },
  {
    //Root path
    path: "/faq",
    //Root name which renders in Header
    name: "Tez-tez verilən suallar",
    //If root is exact root
    isExact: true,
    isHeader: true,
    isNavbar: true,
    index: 6,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  {
    //Root path
    path: "/services",
    //Root name which renders in Header
    name: "Xidmətlər",
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 7,
    //Root compoenent if it is main root
    component: (props) => <Services {...props} />,
  },
  {
    //Root path
    path: "/contact",
    //Root name which renders in Header
    name: "Əlaqə",
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 8,
    //Root compoenent if it is main root
    component: (props) => <Contact {...props} />,
  },
  
  {
    //Root path
    path: "/details",
    //If root is exact root
    //Root compoenent if it is main root
    component: (props) => <NewsDetail {...props} />,
  },
  {
    //Root path
    path: "/cabinet",
    //If root is exact root
    //Root compoenent if it is main root
    component: (props) => <Cabinet {...props} />,
  },
];
