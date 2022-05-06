import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Snackbar from '@mui/material/Snackbar';
import Header from '../Header';
import SideBar from '../SideBar';


import { useDispatch, useSelector } from "react-redux";
import { getMessage, getStatus, toggleSnackbar } from "../../store/snackbar";
import { getUser, login } from "../../store/user";
import { getPage } from "../../store/pages";
import { setActivePage as setGlobalPage } from "../../store/pages";
import { setUser as setUserRedux } from "../../store/user";
// import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useLocalStorage from "../../hooks/useLocalStorage";
import Container from "./Container";
import { baseInstanceAPI } from "../../axios";

const BaseLayout = ({ children }) => {
  const activePage = useSelector(getPage);
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const user = useSelector(getUser);
  // const isLoggedIn = useIsLoggedIn();
  const isopen = useSelector(getStatus);
  const snbMsg = useSelector(getMessage);
  const dispatch = useDispatch();
  const router = useRouter();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResp = await baseInstanceAPI.get("/profile/dashboard", {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        });
        console.log("user is ", userResp.data);
        dispatch(setUserRedux(userResp.data));
      } catch (error) {
        console.log("Error loadin user extra data", error);
      }
    };
    console.log("is logged in useEffect", isLoggedIn());
    if (!isLoggedIn()) {
      router.push("/auth/sign-up");
    } else if (!user) {
      fetchData();
    }
  }, []);

  const setActivePage = (page) => {
    dispatch(setGlobalPage(page));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(toggleSnackbar({ open: false }));
    // setOpen(false);
  };

  return (
    <div className='w-full h-screen flex'>
      <Head>
        <title>Kennis Music Fiesta | Home</title>
        <meta name='description' content='Kennis Music Fiesta' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        ></meta>
      </Head>
      <SideBar activePage={activePage} setActivePage={setActivePage} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isopen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snbMsg}
      />
      <main
        className={
          'bg-[#FBFAFA] h-full flex-grow px-[2.2rem] !pb-[11.4rem] sidebar:pb-[5.2rem] sidebar:px-[5.2rem] py-[2.9rem]  sidebar:py-[6.4rem] overflow-y-scroll scroll_hide'
        }
      >
        <Container>
          {' '}
          <Header title={activePage} setActivePage={setActivePage}></Header>
          {children}
        </Container>
        {/* <div className="w-full h-full grid place-items-center text-3xl">🚧 Under Construction...</div> */}
      </main>
    </div>
  );
};

export default BaseLayout;
