import React, { useState } from "react";
import { Dialog } from "@mui/material";
import ActDetails from "../PopUps/ActDetails";
import { useDispatch } from "react-redux";
import { toggleSnackbar } from "../../store/snackbar";

const MyActDetails = () => {
  const [activeModal, setActiveModal] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const onCopyDetails = () => {
    dispatch(toggleSnackbar({ open: true, message: "Copied Successfully!" }));
    // toggle();
  };

  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }
  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {<ActDetails cancelAction={toggle} action={onCopyDetails}></ActDetails>}
      </Dialog>
      <div className="flex items-center">
        <div className="mr-[12rem] flex flex-col">
          <label>Account Details</label>
          <span>This is the account for your transaction</span>
        </div>
        <a
          onClick={() => {
            setShow(true);
          }}
          className="kef-link"
        >
          Get Details
        </a>
      </div>
    </>
  );
};

export default MyActDetails;
