import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BaseLayout from '../../Components/Layout';
import Cards from '../../Components/Pages/Admin/Cards';
import Events from '../../Components/Pages/Admin/Events';
import RaffleDraws2 from '../../Components/Pages/Admin/RaffleDraws2';
import TransactionsAdmin from '../../Components/Pages/Admin/TransactionsAdmin';
import Users from '../../Components/Pages/Admin/Users';
import { getPage } from '../../store/pages';
import { getAuthToken } from '../../utils/helpers';
import { useRouter } from 'next/router';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import useLocalStorage from '../../hooks/useLocalStorage';
import ArtistCatalogue from '../../Components/Pages/Admin/ArtistCatalogue';
import useShowAlert from '../../hooks/useShowAlert';

const Dashboard = () => {
  const { setAutoPage } = useRaffleDraw();
  const activePage = useSelector(getPage);
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
        break;
    }
    setAutoPage('cards');
  }, [activePage]);
  return (
    <>
      {activePage == 'Users' && <Users></Users>}
      {activePage == 'Transactions' && <TransactionsAdmin></TransactionsAdmin>}
      {activePage == 'Events' && <Events></Events>}
      {activePage == 'Raffle Draws' && <RaffleDraws2></RaffleDraws2>}
      {activePage == 'Cards' && <Cards></Cards>}
      {activePage == 'Artist Catalogue' && <ArtistCatalogue></ArtistCatalogue>}

      {/* {activePage == "Landing" && <LandingPage></LandingPage>} */}
    </>
  );
};

Dashboard.Layout = BaseLayout;
export default Dashboard;
