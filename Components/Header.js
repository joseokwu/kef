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

  const [show, setShow] = useState(false);
  function toggle() {
    console.log('toggleing...');
    open ? setShow(false) : setShow(true);
  }

  function onVerify() {
    setActiveModal('Status');
  }
  function onCheckOut() {
    setActiveModal('ReviewCheckOut');
  }

  function onReview() {
    setLinkText('View Receipt');
    setStatusTitle('Purchase Successful');
    setText(
      'Your purchase order is successful and your account has been credited.'
    );
    setActiveModal('Status');
  }
  function onSelected() {
    setActiveModal('PaymentOptions');
  }

  function onSelectPayOption() {
    setLinkText('Go to dashboard');
    setStatusTitle('Purchase Order Success');
    setText('Your purchase order for 20 tickets was successful');
    setActiveModal('Status');
  }

  function onLogOut() {
    console.log(router);
    if (router.pathname.includes('admin')) {
      logOut();
      router.replace('/admin/sign-in');
      dispatch(toggleAlert('success', 'Logged Out successfully!', true));
    } else {
      logOut();
      router.replace('/auth/sign-in');
      dispatch(toggleAlert('success', 'Logged Out successfully!', true));
    }
  }

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
        // setAutoPage('Overview');
        break;
    }
  }, [activePage, router]);
  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {activeModal == 'Status' && (
          <PopupStatus
            action={toggle}
            title={statusTitle}
            link={`/dashboard`}
            linkText={linkText}
            text={text}
            status={'success'}
          ></PopupStatus>
        )}
        {/* <CardAddress></CardAddress> */}
        {/* <ActivateCard></ActivateCard> */}
        {/* <ClaimReward></ClaimReward> */}
        {activeModal == 'PaymentOptions' && (
          <PaymentOptions
            onCancel={toggle}
            onSelectPayOption={onSelectPayOption}
          ></PaymentOptions>
        )}
        {activeModal == 'AmountOfTickets' && (
          <AmountOfTickets
            onCancel={toggle}
            onSelected={onSelected}
          ></AmountOfTickets>
        )}
        {activeModal == 'VerifyPayment' && (
          <VerifyPayment onCancel={toggle} onVerify={onVerify}></VerifyPayment>
        )}
        {activeModal == 'SelfCheckOut' && (
          <SelfCheckOut
            onCancel={toggle}
            onCheckOut={onCheckOut}
          ></SelfCheckOut>
        )}
        {activeModal == 'ReviewCheckOut' && (
          <ReviewCheckOut
            onCancel={toggle}
            onReview={onReview}
          ></ReviewCheckOut>
        )}
        {/* {activeModal == "VerifyPayment" && <VerifyPayment onVerify={onVerify}></VerifyPayment>} */}
      </Dialog>
      <div className='flex items-center mb-[4.5rem] hdr:mb-[6.4rem] w-full'>
        <h1 className='h1'>{activePage && activePage}</h1>
        <div className='flex flex-wrap ml-auto'>
          {/* Buttons */}
          {!router.route.includes('admin') && (
            <div className='flex-none hidden items-center ml-auto hdr:flex '>
              <button
                onClick={() => {
                  setActiveModal('SelfCheckOut');
                  setShow(true);
                }}
                className='btn ml-auto !bg-[#F0F0F0]'
              >
                Self Checkout
              </button>
              <button
                onClick={() => {
                  setActiveModal('AmountOfTickets');
                  setShow(true);
                }}
                className='btn ml-[1.6rem]'
              >
                Buy Raffle Ticket
              </button>
            </div>
          )}
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

      {!router.route.includes('admin') && (
        <div className='flex items-center ml-auto hdr:hidden mb-[4.5rem] overflow-scroll scroll_hide'>
          <button
            onClick={() => {
              setActiveModal('SelfCheckOut');
              setShow(true);
            }}
            className='btn ml-auto !bg-[#F0F0F0]'
          >
            Self Checkout
          </button>
          <button
            onClick={() => {
              setActiveModal('AmountOfTickets');
              setShow(true);
            }}
            className='btn ml-[1.6rem]'
          >
            Buy Raffle Ticket
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
