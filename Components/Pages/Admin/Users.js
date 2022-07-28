import React, { useState, useRef, useEffect } from 'react';
import StatV2 from '../../Cards/Stats-v2';
import Container from '../../Layout/Container';
import Pagination from '@mui/material/Pagination';
import NavV1 from '../../NavPill/V1';
import SearchAdmin from '../../Form/searchAdmin';
import AdminDatePicker from '../../Form/AdminDatePicker';
import useUsers from '../../../hooks/admin/useUsers';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';
import useAuth from '../../../hooks/admin/useAuth';
import Filter from '../../Filter';
import FilterCard from '../../FilterCard';

const Users = () => {
  const dateRef = useRef();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [navType, setNavType] = useState('All Users');
  const [active, setActive] = useState('All users');
  const [date, setDate] = useState('');
  const [passError, setPassError] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [dateValue, setDateValue] = useState();
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const { setActivePage } = useAuth();

  console.log(date);

  const {
    getUsers,
    stateUsers: { totalJoinedToday, totalUser, users, totalPages },
  } = useUsers();

  const navs = ['All Users', 'New', 'Old'];

  const handleType = (val) => {
    if (val === 'All Users') {
      setNavType('All Users');
      setType('all');
    }
    if (val === 'Old') {
      setNavType('Old');
      setType('old');
    }
    if (val === 'New') {
      setNavType('New');
      setType('new');
    }
    setPage(1);
  };

  const onBack = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  const onNext = () => {
    if (page === totalPages) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setActivePage('Users');
  }, []);

  useEffect(() => {
    getUsers({
      toggleLoad,
      toggleAlertBar,
      setPassError,
      search,
      type,
      page,
      date,
    });
  }, [search, type, page, date]);

  return (
    <Container>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
        <StatV2 value={totalUser && totalUser} title={'Total Users'}></StatV2>
        <StatV2
          value={totalJoinedToday && totalJoinedToday}
          title={'Joined Today'}
        ></StatV2>
      </section>

      {/*  */}
      <section className='mt-[6rem] flex items-center mb-[2.6rem]'>
        <NavV1
          activeNav={navType}
          navs={navs}
          onChange={(val) => {
            handleType(val);
          }}
        />
        <div className='ml-auto flex  w-[34%] relative'>
          <Filter setShowFilter={setShowFilter} showFilter={showFilter} />
          {showFilter && (
            <FilterCard
              date={date}
              setDate={setDate}
              type={'users'}
              setDateValue={setDateValue}
              handleFilter={() => setShowFilter(false)}
              dateValue={dateValue}
            />
          )}
          <SearchAdmin
            onChange={(e) => setSearch(e.target.value)}
          ></SearchAdmin>
        </div>
      </section>

      {/* Table */}
      <div className='w-[100%] overflow-x-scroll scroll_hide rounded-3xl border border-[#CECCCC]'>
        <table className=' w-full  border-collapse'>
          <thead className='text-bl text-black-light whitespace-nowrap bg-gray-lightest-2  caption_heavy h-[48px] font-medium '>
            <tr className=''>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] pl-[5.8rem]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  First Name
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Last Name
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Email
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Phone Number
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Amount
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-right pt-[10px] px-[16px] pr-[6.5rem]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem] '>
                  Date Purchased
                </span>
              </th>
            </tr>
          </thead>
          <tbody className='caption_light text-black-default whitespace-nowrap h-[48px]'>
            {users?.map((el, index) => {
              return (
                <>
                  <tr className='' key={index}>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem] pl-[5.8rem]'>
                      {el.firstName}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el.lastName}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el.email}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el.phone}
                    </td>

                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el.accumulatedAmountForNextTicket}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-right align-text-bottom font-semibold text-[1.2rem] pr-[6.5rem]'>
                      {el.createdOn.slice(0, 10)}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className='flex items-center justify-center mt-[3.2rem]'>
          <button
            onClick={() => {
              onBack();
            }}
            className={`h-[4rem] grid place-items-center place-content-center rounded-[5px] p-[1.2rem] border border-[#827F7F] bg-[#F0F0F0]`}
          >
            <svg
              className=' rotate-180'
              width='6'
              height='10'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.88047 5.00005L0.167969 1.28755L1.22847 0.227051L6.00147 5.00005L1.22847 9.77305L0.167969 8.71255L3.88047 5.00005Z'
                fill='black'
              />
            </svg>
          </button>
          <Pagination
            count={totalPages}
            page={page}
            onClick={(e) => setPage(parseInt(e.target.textContent))}
            variant='outlined'
            shape='rounded'
            hidePrevButton
            hideNextButton
          />
          <button
            onClick={() => {
              onNext();
            }}
            className={`h-[4rem] grid place-items-center place-content-center rounded-[5px] p-[1.2rem] border border-[#827F7F] bg-[#F0F0F0]`}
          >
            <svg
              width='6'
              height='10'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.88047 5.00005L0.167969 1.28755L1.22847 0.227051L6.00147 5.00005L1.22847 9.77305L0.167969 8.71255L3.88047 5.00005Z'
                fill='black'
              />
            </svg>
          </button>
        </div>
      )}
    </Container>
  );
};

export default Users;
