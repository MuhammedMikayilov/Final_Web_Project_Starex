import * as React from "react";
import qs from "query-string";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {Header, Loading} from "@components";
import { AppProvider, SidebarProvider } from "@contexts";
import { MENU_ROUTES } from "@config";
import { useCookie } from "@hooks";
import {Footer} from "@components/Template/Footer";

export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const cookie = useCookie();
  const history = useHistory();


  //Render routes dynamically - this is optional function :)
  const renderRoutes = (routes) => {
    return routes.map((route, key) => (
      <Route
        exact={route.isExact}
        path={route.path}
        render={(props) => (
            route.component({ ...props, ...{ name: route.name } })
          )
        }
        key={key}
      />
    ));
  };

  //Change parent url location dynamically
  React.useEffect(() => {
    if (process.env.FRAME_MODE && parent.window && parent.window.historyPush) {
      history.listen((location) => {
        parent.window.historyPush(
          process.env.PUBLIC_URL.replace("/frame", "") + location.pathname
        );
      });
    }
  }, [history]);

  setTimeout(()=>{setLoading(false)},1500)


  if (loading) {
    return <Loading bgClass="bg-white" />;
  }


  return (
    <AppProvider>
      <Header />
      <Switch>
        {renderRoutes(MENU_ROUTES)}
        {/* You must add your default root here */}
        <Redirect from="*" to="/" />
      </Switch>
      <Footer activeRoute={'Test'} />
    </AppProvider>
  );
};
