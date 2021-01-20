import * as React from "react";
import { Loading, ErrorBoundary, Modal } from "@components";
import { useToast, useModal } from "@hooks";
import { AppContext } from "@contexts";
import { Lang } from "@plugins";
import { inArray } from "@lib";
import { Add } from "./components";
import Index from "index.js";
import {HomePage} from "@layouts/HomePage";

export const Test = (props) => {
  //Context hook
  const { setActiveRoute } = React.useContext(AppContext);
  //Alert hook
  const toast = useToast();
  //Modal hook
  const modal = useModal();
  //State hook
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setActiveRoute({
      name: props.name,
      path: props.match.path,
    });
  }, []);

  return (
    //ErrorBoundary is the error component for UI if your code fails
    <ErrorBoundary>
      {/* Modals */}
      <Modal show={inArray("add", modal.modals)}>
        <Modal.Header onClose={() => modal.hide("add")}>
          <span className="title">{Lang.get("Add")}</span>
        </Modal.Header>
        <Modal.Body>
          <Add goBack={() => modal.hide("add")} />
        </Modal.Body>
      </Modal>
      {/* Content */}
      <HomePage />
      {/*<div className="container-fluid my-2">*/}
      {/*  <div className="card shadow">*/}
      {/*    <div className="card-header">*/}
      {/*      <div className="row m-0">*/}
      {/*        <div className="col-md-1 col-6 order-md-2 offset-md-11">*/}
      {/*          <button*/}
      {/*            type="button"*/}
      {/*            className="btn btn-success btn-block lh-24 px-3"*/}
      {/*            onClick={() => modal.show("add")}*/}
      {/*          >*/}
      {/*            <i className="feather feather-plus fs-18 align-middle" />*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="card-body">*/}
      {/*      {loading && <Loading />}*/}
      {/*      <h1>Test</h1>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </ErrorBoundary>
  );
};
