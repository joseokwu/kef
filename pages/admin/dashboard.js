import React from 'react';
import { useSelector } from 'react-redux';
import BaseLayout from '../../Components/Layout';
import Cards from '../../Components/Pages/Admin/Cards';
import Events from '../../Components/Pages/Admin/Events';
import RaffleDraws2 from '../../Components/Pages/Admin/RaffleDraws2';
import TransactionsAdmin from '../../Components/Pages/Admin/TransactionsAdmin';
import Users from '../../Components/Pages/Admin/Users';
import { getPage } from '../../store/pages';

const Dashboard = () => {
  const activePage = useSelector(getPage);
  return (
    <>
      {activePage == 'Users' && <Users></Users>}
      {activePage == 'Transactions' && <TransactionsAdmin></TransactionsAdmin>}
      {activePage == 'Events' && <Events></Events>}
      {activePage == 'Raffle Draws' && <RaffleDraws2></RaffleDraws2>}
      {activePage == 'Cards' && <Cards></Cards>}

      {/* {activePage == "Landing" && <LandingPage></LandingPage>} */}
    </>
  );
};

Dashboard.Layout = BaseLayout;
export default Dashboard;
