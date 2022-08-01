import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from '../hooks/useLocalStorage';
import useShowAlert from '../hooks/useShowAlert';

const Dashboard = () => {
  const { getLocalStorage, isAdminLoggedIn, logOut } = useLocalStorage();
  const toggleAlertBar = useShowAlert();

  const router = useRouter();
  useEffect(() => {
    const res = isAdminLoggedIn();
    switch (res) {
      case 'noToken':
        toggleAlertBar('You are not logged In', 'fail', true, 5000);
        logOut();
        router.replace('/');
        break;
      case 'expired':
        toggleAlertBar('Your session has expired', 'fail', true, 5000);
        logOut();
        router.replace('/');
        break;
      case 'error':
        toggleAlertBar('Please log in again', 'fail', true, 5000);
        logOut();
        router.replace('/');
        break;
      default:
        router.replace('/overview');
        break;
    }
  }, []);

  return <></>;
};
export default Dashboard;
