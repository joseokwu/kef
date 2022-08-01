import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from '../../hooks/useLocalStorage';
import useShowAlert from '../../hooks/useShowAlert';

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
        router.replace('/admin/sign-in');
        break;
      case 'expired':
        toggleAlertBar('Your session has expired', 'fail', true, 5000);
        logOut();
        router.replace('/admin/sign-in');
        break;
      case 'error':
        toggleAlertBar('Please log in again', 'fail', true, 5000);
        logOut();
        router.replace('/admin/sign-in');
        break;
      default:
        router.replace('/admin/overview');
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};
export default Dashboard;
