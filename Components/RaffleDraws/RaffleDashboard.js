import React, { useEffect, useState } from 'react';
import StatV2 from '../Cards/Stats-v2';
import Container from '../Layout/Container';
import Pagination from '@mui/material/Pagination';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import SearchAdmin2 from '../Form/searchAdmin2';
import styled from 'styled-components';
import Filter from '../Filter';
import { useRouter } from 'next/router';
import FilterCard from '../FilterCard';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';

const RaffleDashboard = () => {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState('All Cards');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [passError, setPassError] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [dateValue, setDateValue] = useState();
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const {
    getRaffleDraw,
    stateRaffleDraw: { campaigns, drawHistoryRepo, totalCampaign, totalPages },
  } = useRaffleDraw();
  const router = useRouter();
  // const [location,s setLocation] = useState('dashboard');
  // const {
  //   getCards,
  //   stateCards: { totalCards, newCards, cards, totalPages },
  // } = useCards();
  const navs = ['All Cards', 'New Cards'];

  const handleType = (val) => {
    if (val === 'All Cards') {
      setType('all');
    }
    if (val === 'New Cards') {
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

  const data = [
    {
      title: 'Kennis Music Festival',
      date: '21 March, 2022',
      duration: '7 Weeks',
      drawType: 'Weekly',
      subscribers: 200,
      status: 'Active',
      action: 'View Campaign',
    },
    {
      title: 'Kennis Music Festival',
      date: '21 March, 2022',
      duration: '7 Weeks',
      drawType: 'Weekly',
      subscribers: 200,
      status: 'Pending',
      action: 'View Campaign',
    },
    {
      title: 'Kennis Music Festival',
      date: '21 March, 2022',
      duration: '7 Weeks',
      drawType: 'Weekly',
      subscribers: 200,
      status: 'Completed',
      action: 'View Campaign',
    },
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  function formatDate(dateToFormat) {
    return `${new Date(dateToFormat).getDate()} ${
      months[new Date(dateToFormat).getMonth()]
    }, ${new Date(dateToFormat).getFullYear()}`;
  }

  useEffect(() => {
    getRaffleDraw({
      toggleAlertBar,
      toggleLoad,
      setPassError,
    });
  }, []);

  return (
    <Container>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
        <StatV2
          value={totalCampaign && totalCampaign}
          title={'Campaigns Created'}
        ></StatV2>
        <StatV2
          value={drawHistoryRepo && drawHistoryRepo}
          title={'Raffle Draw Completed'}
        ></StatV2>
        <StatV2 value={10} title={'Total Weekly Draws'}></StatV2>
        <StatV2 value={10} title={'Total Progressive Draws'}></StatV2>
      </section>

      {/*  */}
      <section className='mt-[4.6rem] flex justify-between mb-[3.2rem] h-[4.2rem]'>
        <div className='flex gap-[1rem] w-[38%] relative'>
          <SearchAdmin2
            onChange={(e) => setSearch(e.target.value)}
          ></SearchAdmin2>
          {/* <NavV1
          activeNav={'All Cards'}
          navs={navs}
          onChange={(val) => {
            handleType(val);
          }}
        /> */}
          <Filter
            setShowFilter={setShowFilter}
            showFilter={showFilter}
          ></Filter>
          {showFilter && (
            <FilterCard
              date={date}
              setDate={setDate}
              type={'raffle'}
              handleFilter={() => setShowFilter(false)}
              setDateValue={setDateValue}
              dateValue={dateValue}
            />
          )}
        </div>

        <BtnWrapper
        // onClick={() => setShow('base')}
        >
          <button
            className='create-btn'
            onClick={() => router.push('/create-campaign')}
          >
            Create Campaign
          </button>
        </BtnWrapper>
      </section>

      {/* Table */}
      <div className='w-[100%] overflow-x-scroll scroll_hide rounded-3xl border border-[#CECCCC]'>
        <table className=' w-full  border-collapse'>
          <thead className='text-bl text-black-light whitespace-nowrap bg-gray-lightest-2  caption_heavy h-[48px] font-medium '>
            <tr className=''>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] pl-[5.8rem]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Title of Campaign
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Date Created
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Duration
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Draw Type
                </span>
              </th>

              <th className='border-b border-gray-lighter font-medium text-left pt-[10px] px-[16px]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem]'>
                  Subscribers
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-right pt-[10px] px-[16px] pr-[6.5rem]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem] '>
                  Status
                </span>
              </th>
              <th className='border-b border-gray-lighter font-medium text-right pt-[10px] px-[16px] pr-[6.5rem]'>
                <span className=' align-text-bottom mt-auto text-[#A1A1A1] font-medium text-[1.2rem] '>
                  Action
                </span>
              </th>
            </tr>
          </thead>
          <tbody className='caption_light text-black-default whitespace-nowrap h-[48px]'>
            {campaigns?.map((el) => {
              return (
                <>
                  <tr className=''>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem] pl-[5.8rem]'>
                      {el?.campaignTitle}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {formatDate(el?.createdAt)}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el?.campaignDuration}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el?.typeOfDraw}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      {el?.subscribers}
                    </td>
                    <td className=' border-gray-lighter p-[16px] text-left align-text-bottom font-semibold text-[1.2rem]'>
                      <span
                        className={`px-[11px] text-lg font-semibold py-[5px] rounded-full ${
                          el?.status === 'Active'
                            ? 'bg-[#ECFFF2] text-[#348B52]'
                            : el?.status === 'Pending'
                            ? 'bg-[#FFF7EC] text-[#FCAC0D]'
                            : 'bg-[#F0F0F0] text-[#252525]'
                        }`}
                      >
                        {el?.status}
                      </span>
                    </td>
                    <td className='border-gray-lighter p-[16px] text-right align-text-bottom font-semibold text-[1.2rem] pr-[6.5rem]'>
                      <button
                        className='border border-[#252525] text-[#252525] px-6 py-1 rounded-lg'
                        onClick={() =>
                          router.push({
                            pathname: '/view-campaign',
                            query: {
                              id: el?.id,
                              type: el?.typeOfDraw,
                              status: el?.status,
                            },
                          })
                        }
                      >
                        View Campaign
                      </button>
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
      )}
    </Container>
  );
};

export default RaffleDashboard;

const BtnWrapper = styled.div`
  font-size: 1.5rem;
  color: #a5abab;
  cursor: pointer;

  .create-btn {
    padding: 12px 20px 12px 20px;
    border-radius: 10px;
    font-weight: 600;
    /* background: #eaeaea;
    color: black; */
    background: linear-gradient(to left, #a608a3, #c6155f, #d82023);
    color: white;
  }
`;
