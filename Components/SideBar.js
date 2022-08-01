import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/admin/useAuth';
import useRaffleDraw from '../hooks/admin/useRaffleDraw';

const SideBar = ({ setActivePage }) => {
  const {
    stateAuth: { activePage },
  } = useAuth();
  const {
    setAutoPage,
    stateRaffleDraw: { fullScreen },
  } = useRaffleDraw();

  const adminPages = [
    'Overview',
    'Raffle Draws',
    'Cards',
    'Events',
    'Transactions',
    'Users',
    'Artist Catalogue',
    'Vendors',
  ];
  const icons = [
    'Dashboard',
    'Raffle-Tickets',
    'Rewards',
    'Livestream-Event',
    'Graph',
    'Users',
    'Settings',
  ];
  const adminIcons = [
    'overview',
    'raffle',
    'cards',
    'events',
    'transactions',
    'users',
    'artist',
    'vendors',
  ];
  const [admin, setIsAdmin] = useState(false);
  // const [active, setActive] = useState("Dashboard");

  const router = useRouter();

  const handleAdminNav = (page) => {
    switch (page) {
      case 'Overview':
        router.push('/overview');
        break;
      case 'Raffle Draws':
        router.push('/raffle-draws');
        break;
      case 'Cards':
        router.push('/cards');
        break;
      case 'Events':
        router.push('/events');
        break;
      case 'Transactions':
        router.push('/transactions');
        break;
      case 'Users':
        router.push('/users');
        break;
      case 'Artist Catalogue':
        router.push('/artist-catalogue');
        break;
      case 'Vendors':
        router.push('/vendors');
        break;
      default:
        break;
    }
  };

  useEffect(() => {}, [router.route]);
  return (
    <>
      {!fullScreen && (
        <div className='w-[37rem] h-screen px-[4.7rem] py-[4.9rem] hidden flex-col bg-[#010101] text-white bg-sidebar sidebar:flex'>
          <img
            src='/kef_logo.svg'
            className='mb-[5.1rem] w-[16.3rem] mx-auto'
            alt='logo'
          ></img>
          <ul className='bg-r whitespace-nowrap'>
            {adminPages.map((page, i) => {
              return (
                <li
                  className='flex items-center mb-[4.2rem] cursor-pointer'
                  key={i}
                  onClick={() => {
                    handleAdminNav(page);
                  }}
                >
                  <div
                    className={`transition-all duration-200 w-[1rem] h-[1rem] rounded-full bg-gradient-to-br from-[#A608A3] via-[#C6155F] to-[#D82023] mr-[2.6rem] opacity-0 ${
                      page == activePage ? ' opacity-100' : ''
                    } 
                 ${
                   page == 'Dashboard' && activePage == 'Profile'
                     ? ' opacity-100'
                     : ''
                 }`}
                  ></div>
                  <i
                    className={`icon icon-${
                      adminIcons[i]
                    } mr-[1.7rem] text-[1.8rem] ${
                      adminIcons[i] == 'Dashboard' ? ' text-[2.8rem]' : ''
                    }  ${
                      page == activePage
                        ? '  text-transparent bg-clip-text bg-gradient-to-br from-[#A608A3] via-[#C6155F] to-[#D82023]'
                        : ''
                    }
                  ${
                    page == 'Dashboard' && activePage == 'Profile'
                      ? ' !text-transparent bg-clip-text bg-gradient-to-br from-[#A608A3] via-[#C6155F] to-[#D82023]'
                      : ''
                  }`}
                  ></i>
                  <span
                    className={`transition-all duration-200 font-normal text-[1.8rem]  ${
                      page == activePage
                        ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#A608A3] via-[#C6155F] to-[#D82023] !font-bold text-[2rem]'
                        : 'text-white'
                    }  
                  ${
                    page == 'Dashboard' && activePage == 'Profile'
                      ? ' !text-transparent bg-clip-text bg-gradient-to-br from-[#A608A3] via-[#C6155F] to-[#D82023] !font-bold text-[2rem]'
                      : ''
                  }`}
                  >
                    {page}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Mobile Nav */}
      <div className='fixed bottom-0 right-0 h-[8rem] bg-black w-screen z-50 flex justify-between sidebar:hidden py-[2.23rem] px-[2.8rem]'>
        <ul className='bg-r whitespace-nowrap flex justify-between w-full'>
          {adminPages.map((page, i) => {
            return (
              <li
                className={`flex items-center mb-[4.2rem] cursor-pointer flex-col ${
                  page == activePage ? '  text-[#FCAC0D]' : 'text-white'
                }`}
                key={i}
                onClick={() => {
                  setActivePage(page);
                }}
              >
                <i
                  className={`icon icon-${icons[i]} text-[1.8rem] ${
                    icons[i] == 'Dashboard' ? ' text-[1.8rem]' : ''
                  } `}
                ></i>
                <span className='mt-[1rem]'>{page}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
