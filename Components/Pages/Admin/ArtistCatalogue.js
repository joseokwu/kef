import React, { useState } from 'react';
import StatV2 from '../../Cards/Stats-v2';
import Container from '../../Layout/Container';
import Pagination from '@mui/material/Pagination';
import NavV1 from '../../NavPill/V1';
import SearchAdmin from '../../Form/searchAdmin';
import AdminDatePicker from '../../Form/AdminDatePicker';
import useArtistCatalogue from '../../../hooks/admin/useArtistCatalogue';
import { useEffect } from 'react';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';

const ArtistCatalogue = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [active, setActive] = useState('All users');
  const [passError, setPassError] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('all');
  const [search, setSearch] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const {
    getArtistCatalogue,
    stateArtistCatalogue: {
      totalArtists,
      artistsJoinedToday,
      artists,
      totalPages,
    },
  } = useArtistCatalogue();

  const navs = ['All Users', 'New', 'Old'];
  // const data = [
  //   {
  //     firstName: 'Jonathan',
  //     lastName: 'Mcreynold',
  //     DatePurchased: '21 March, 2022',
  //     action: 'Publish',
  //     phone: '+234(0)812 3456789',
  //     email: 'j.mcreynold@gmail.com',
  //   },
  //   {
  //     firstName: 'Jonathan',
  //     lastName: 'Smith',
  //     DatePurchased: '21 March, 2022',
  //     action: 'Unpublish',
  //     phone: '+234(0)812 3456789',
  //     email: 'jonsmith@gmail.com',
  //   },
  //   {
  //     firstName: 'Jonathan',
  //     lastName: 'Mcreynold',
  //     DatePurchased: '21 March, 2022',
  //     action: 'Publish',
  //     phone: '+234(0)812 3456789',
  //     email: 'j.mcreynold@gmail.com',
  //   },
  //   {
  //     firstName: 'Jonathan',
  //     lastName: 'Mcreynold',
  //     DatePurchased: '21 March, 2022',
  //     action: 'Publish',
  //     phone: '+234(0)812 3456789',
  //     email: 'j.mcreynold@gmail.com',
  //   },
  //   {
  //     firstName: 'Jonathan',
  //     lastName: 'Smith',
  //     DatePurchased: '21 March, 2022',
  //     action: 'Unpublish',
  //     phone: '+234(0)812 3456789',
  //     email: 'jonsmith@gmail.com',
  //   },
  // ];

  const handleType = (val) => {
    if (val === 'All Users') {
      setType('all');
    }
    if (val === 'Old') {
      setType('old');
    }
    if (val === 'New') {
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
    getArtistCatalogue({
      setPassError,
      toggleAlertBar,
      toggleLoad,
      search,
      type,
      date,
      page,
    });
  }, [type, search, date, page]);

  console.log(totalArtists, artistsJoinedToday, artists, totalPages);
  return (
    <Container>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
        <StatV2
          value={totalArtists && totalArtists}
          title={'Total Artist'}
        ></StatV2>
        <StatV2
          value={artistsJoinedToday && artistsJoinedToday}
          title={'Artists Joined Today'}
        ></StatV2>
      </section>

      {/*  */}
      <section className='mt-[4.6rem] flex items-center mb-[3.2rem]'>
        <NavV1
          activeNav={'All Users'}
          navs={navs}
          onChange={(val) => {
            handleType(val);
          }}
        />
        <SearchAdmin onChange={(e) => setSearch(e.target.value)}></SearchAdmin>
        <AdminDatePicker setDate={setDate} date={date}></AdminDatePicker>
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
              <th className='border-b border-gray-lighter font-medium text-right pt-[10px] px-[16px] pr-[6.5rem]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem] '>
                  Date Created
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Action
                </span>
              </th>
            </tr>
          </thead>
          <tbody className='caption_light text-black-default whitespace-nowrap h-[48px]'>
            {artists?.map((el) => {
              return (
                <>
                  <tr className=''>
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
                    <td className=' border-gray-lighter p-[16px] text-right align-text-bottom font-semibold text-[1.2rem] pr-[6.5rem]'>
                      {el.createdAt}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      <button
                        className={`px-[11px] text-lg font-semibold py-[5px] rounded-md border-2 ${
                          el.action == 'Unpublish'
                            ? 'border-[#252525] text-[#252525]'
                            : 'border-[#338D4F] text-[#338D4F]'
                        }`}
                      >
                        {el.action}
                      </button>
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      <button className='px-[11px] text-lg font-semibold py-[5px] rounded-md border-2 border-[#F6E2E2] text-[#8D3333]'>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='flex items-center justify-center mt-[3.2rem]'>
        <button
          onClick={onBack}
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
          count={totalPages && totalPages}
          page={page}
          onChange={(e) => setPage(parseInt(e.target.textContent))}
          variant='outlined'
          shape='rounded'
          hidePrevButton
          hideNextButton
        />
        <button
          onClick={onNext}
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
    </Container>
  );
};

export default ArtistCatalogue;
