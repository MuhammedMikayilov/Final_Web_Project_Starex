import * as React from "react";
import {Link} from "react-router-dom";
import {InitialState} from "@components/Template/actions";
import HeaderTop from "@components/Template/components/HeaderTop";
import HeaderBottom from "@components/Template/components/HeaderBottom";

export const Header = () => {

  return (
      <header>
         <HeaderTop />
        <HeaderBottom />
      </header>
  );
};
