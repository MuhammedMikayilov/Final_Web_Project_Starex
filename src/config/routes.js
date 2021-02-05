import * as React from "react";
import { HomePage } from "@layouts";
import Test from "@layouts/Tariffs/Test";
import Tariffs from "@layouts/Tariffs";
import Services from "@layouts/Services";

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
    isHeader: true,
    //If root is exact root
    isExact: true,
    index: 1,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
  },
  //NavbarPages
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
    index: 0,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
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
    isNavbar: true,
    index: 5,
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
    path: "/responsibility",
    //Root name which renders in Header
    name: "Sosial məsuliyyət",
    //If root is exact root
    isExact: true,
    isNavbar: true,
    index: 0,
    //Root compoenent if it is main root
    component: (props) => <Test {...props} />,
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
    component: (props) => <Test {...props} />,
  },
];
