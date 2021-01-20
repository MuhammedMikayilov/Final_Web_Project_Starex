import React, { forwardRef, useEffect, useState, useRef } from "react";
import classNames from "classnames";

const ModalContainer = forwardRef(({ className, children, show, ...props }, ref) => {
  const [visible, setVisible] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setVisible(show);
    }, 10);

    return () => clearTimeout(timeout.current);
  }, [show]);

  if(!show) {
    return null;
  }
  
  return (
    <div
      ref={ref}
      className={classNames("frame__modal", className && className, {
        show: visible
      })}
      {...props}
    >
      {children}
    </div>
  );
});

const Header = forwardRef(({ className, children, onClose = () => true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("frame__modal-header", className && className)}
      {...props}
    >
      <button type="button" className="frame__modal-header-close" onClick={onClose}>
        <i className="feather feather-arrow-left" />
      </button>
      <div className="frame__modal-header-content">
        {children}
      </div>
    </div>
  );
});

const Footer = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("frame__modal-footer", className && className)}
      {...props}
    >
      {children}
    </div>
  );
});

const Body = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("frame__modal-body", className && className)}
      {...props}
    >
      {children}
    </div>
  );
});

ModalContainer.Header = Header;
ModalContainer.Footer = Footer;
ModalContainer.Body = Body;

export const Modal = ModalContainer;
