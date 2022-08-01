import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AmountOfTickets from './PopUps/AmountOfTickets';
import VerifyPayment from './PopUps/VerifyPayment';
import PaymentOptions from './PopUps/PaymentOptions';
import PopupStatus from './PopUps/PopUpStatus';
import CardAddress from './PopUps/CardAddress';
import ActivateCard from './PopUps/ActivateCard';
import ClaimReward from './PopUps/ClaimReward';
import { Tooltip } from '@mui/material';
import SelfCheckOut from './PopUps/SelfCheckOut';
import ReviewCheckOut from './PopUps/ReviewCheckOut';
import { useRouter } from 'next/router';
import useLocalStorage from '../hooks/useLocalStorage';
import { toggleAlert } from '../store/alert';
import { useDispatch } from 'react-redux';
import useAuth from '../hooks/admin/useAuth';
import useShowAlert from '../hooks/useShowAlert';
import { useEffect } from 'react';

const Header = ({ title, setActivePage }) => {
  // const VerifyPaymentProcess = ["VerifyPayment", "Status"];
  const [activeModal, setActiveModal] = useState('');
  const [statusTitle, setStatusTitle] = useState();
  const [linkText, setLinkText] = useState();
  const [text, setText] = useState();
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const { logOut, isAdminLoggedIn } = useLocalStorage();
  // const activePage = useSelector(getPage);
  const toggleAlertBar = useShowAlert();
  const dispatch = useDispatch();
  const {
    stateAuth: { activePage },
  } = useAuth();

  function onLogOut() {
    logOut();
    router.replace('/');
    dispatch(toggleAlert('success', 'Logged Out successfully!', true));
  }

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
        // setAutoPage('Overview');
        break;
    }
  }, [activePage, router]);
  return (
    <>
      <div className='flex items-center mb-[4.5rem] hdr:mb-[6.4rem] w-full'>
        <h1 className='h1'>{activePage && activePage}</h1>
        <div className='flex flex-wrap ml-auto'>
          {/* Buttons */}

          {/* User Profile */}
          <div className='flex items-center ml-auto relative'>
            <div className=' w-[42px] h-[42px] rounded-full grid place-items-center ml-auto mobile:ml-[59px] mr-[16px]'>
              {/* <i className='icon icon-notification text-[1.7rem]'></i> */}
            </div>
            <div className='peer  py-4'>
              <div className='b border-l '>
                {/* <Tooltip title="Profile" leaveDelay={200}> */}
                <img
                  onClick={() => {
                    // setShowMore((val) => !val);
                  }}
                  className='h-[4.2rem] cursor-pointer w-[4.2rem] object-cover rounded-full ml-[16px]'
                  src='/profile-circle.svg'
                />
                {/* </Tooltip> */}
              </div>
            </div>
            {/* Logout/Profile */}
            <ul className='p-[2.2rem] hidden hover:block peer-hover:block absolute top-[5.5rem] z-50 right-0 bg-white  rounded-[2rem] rounded-tr-none'>
              {/* <li
                onClick={() => {
                  setActivePage('Profile');
                }}
                className='flex items-center mb-[1.9rem] cursor-pointer'
              >
                <img src='/profile-box.svg'></img>{' '}
                <span className=' font-medium text-[1.4rem] ml-3'>Profile</span>
              </li> */}
              <li
                onClick={() => {
                  onLogOut();
                }}
                className='flex items-center text-red-700 cursor-pointer'
              >
                <img src='/logout.svg'></img>{' '}
                <span className=' font-medium text-[1.4rem] ml-3'>Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
