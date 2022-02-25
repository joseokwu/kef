import React, { useState } from "react";

const Modal = ({ children, open, setOpen }) => {
  // const [show, setShow] = useState(false);
  return (
    <div>
      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="bg-[#00000091] z-50 w-screen h-screen grid place-items-center fixed top-0 left-0 transition-all"
        >
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
