import * as React from "react";
import qs from "query-string";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Loading, AuthError, Sidebar, Header, Content } from "@components";
import { AppProvider, SidebarProvider } from "@contexts";
import { settings, translations } from "@actions";
import { MENU_ROUTES } from "@config";
import { Auth, Lang } from "@plugins";
import { useCookie } from "@hooks";
import {Footer} from "@components/Template/Footer";

export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const cookie = useCookie();
  const history = useHistory();

  //Load account data
  const loadSettings = async (token) => {
    const response = await settings({ token });
    return (response && response.account_data) || false;
  };

  //Load lang data
  const loadTranslations = async (token) => {
    const response = await translations({ token });
    return (
      (response?.data && {
        lang: response.data.lang,
        lang_data: response.data.lang_data,
      }) ||
      false
    );
  };

  //Load common data
  const loadData = async () => {
    //data which passed came from parent panel
    const common = parent.window.common;
    if (common) {
      let { account_data, token, lang_data, lang } = common;
      Auth.setData({ ...account_data, token });
      Lang.setData({ lang_data, lang: lang?.short_code });
      setLoading(false);
      setParentLoading(false);
    } else {
      const request_uri = qs.parse(location.search);
      const token = request_uri.token || cookie.get("_token") || false;

      const settings = await loadSettings(token);
      const translations = await loadTranslations(token);

      Auth.setData({ ...settings, token });
      Lang.setData(translations);
      setLoading(false);
    }
  };

  const setParentLoading = (value) => {
    if (
      parent.window?.setLoading &&
      typeof parent.window.setLoading === "function"
    ) {
      parent.window.setLoading(value);
    }
  };

  //Render routes dynamically - this is optional function :)
  const renderRoutes = (routes) => {
    return routes.map((route, key) => (
      <Route
        exact={route.isExact}
        path={route.path}
        render={(props) =>
          route.nestedRoutes?.length ? (
            <Switch>
              {route.nestedRoutes.map((item, key) => (
                <Route
                  exact={item.isExact}
                  path={route.path + item.path}
                  render={(props) =>
                    item.component({ ...props, ...{ name: item.name } })
                  }
                  key={key}
                />
              ))}
              <Redirect to={route.path} />
            </Switch>
          ) : (
            route.component({ ...props, ...{ name: route.name } })
          )
        }
        key={key}
      />
    ));
  };

  React.useEffect(() => {
    loadData();
  }, []);

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

  if (loading) {
    return <Loading bgClass="bg-white" />;
  }

  // if (!Auth.isAuth()) {
  //   return <AuthError message={Lang.get("NotAutorized")} />;
  // }

  return (
    <AppProvider>
      <Header />
      <Switch>
        {renderRoutes(MENU_ROUTES)}
        {/* You must add your default root here */}
        <Redirect from="*" to="/test" />
      </Switch>
      <Footer />
    </AppProvider>
  );
};
