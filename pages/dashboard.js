import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import Dashboard from '../Components/Pages/Dashboard';
import RaffleTickets from '../Components/Pages/RaffleTickets';
import Transactions from '../Components/Pages/Transactions';
import Rewards from '../Components/Pages/Rewards';
import LiveStream from '../Components/Pages/LiveStream';
import Profile from '../Components/Pages/Profile';
import BaseLayout from '../Components/Layout';

// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

import { useSelector } from 'react-redux';
// import { getMessage, getStatus, toggleSnackbar } from "../store/snackbar";
// import { login } from "../store/user";
import { getPage } from '../store/pages';
import LandingPage from '../Components/Pages/LandingPage';
// import { setActivePage as setGlobalPage } from "../store/pages";
import UseIsLoggedIn from '../hooks/useIsLoggedIn';

export default function Home() {
  // const [activePage, setActivePage] = useState("Dashboard");
  const activePage = useSelector(getPage);
  const isLoggedIn = UseIsLoggedIn();
  // const open = useSelector(getStatus);
  // const snbMsg = useSelector(getMessage);
  // const dispatch = useDispatch();
  // const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/auth/sign-up');
    }
  }, []);

  // const setActivePage = (page) => {
  //   dispatch(setGlobalPage(page));
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   dispatch(toggleSnackbar({ open: false }));
  //   // setOpen(false);
  // };

  return (
    <>
      {activePage == 'Dashboard' && <Dashboard></Dashboard>}
      {activePage == 'Raffle Tickets' && <RaffleTickets></RaffleTickets>}
      {activePage == 'Rewards' && <Rewards></Rewards>}
      {activePage == 'Livestream Event' && <LiveStream></LiveStream>}
      {activePage == 'Transactions' && <Transactions></Transactions>}
      {activePage == 'Profile' && <Profile></Profile>}
      {/* {activePage == "Landing" && <LandingPage></LandingPage>} */}
    </>
  );
}

Home.Layout = BaseLayout;
