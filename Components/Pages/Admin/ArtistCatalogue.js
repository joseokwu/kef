import React, { useState, useEffect } from 'react';
import StatV2 from '../../Cards/Stats-v2';
import Container from '../../Layout/Container';
import Pagination from '@mui/material/Pagination';
import NavV1 from '../../NavPill/V1';
import SearchAdmin from '../../Form/searchAdmin';
import useArtistCatalogue from '../../../hooks/admin/useArtistCatalogue';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';
import Filter from '../../Filter';
import SingleArtistCatalogue from '../../ArtistCatalogue/SingleArtistCatalogue';
import styled from 'styled-components';
import ArtistCard from '../../ArtistCatalogue/ArtistCard';
import ArtistPublishModal from '../../ArtistCatalogue/ArtistPublishModal';
import useAuth from '../../../hooks/admin/useAuth';
import FilterCard from '../../FilterCard';

const ArtistCatalogue = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [active, setActive] = useState('All Artists');
  const [passError, setPassError] = useState('');
  // const [date, setDate] = useState('');
  const [type, setType] = useState('all');
  const [navType, setNavType] = useState('All Artists');
  const [search, setSearch] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const { setActivePage } = useAuth();
  const [view, setView] = useState(false);
  const [modal, setModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [dateValue, setDateValue] = useState();
  const [date, setDate] = useState(new Date().toLocaleDateString());

  // const {
  //   getArtistCatalogue,
  //   stateArtistCatalogue: {
  //     totalArtists,
  //     artistsJoinedToday,
  //     // artists,
  //     totalPages,
  //   },
  // } = useArtistCatalogue();

  const navs = ['All Artists', 'Artists', 'Producers'];
  const data = [
    {
      number: '01',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Publish',
    },
    {
      number: '02',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Unpublish',
    },
    {
      number: '03',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Publish',
    },
    {
      number: '04',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Publish',
    },
    {
      number: '05',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Unpublish',
    },
    {
      number: '06',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Publish',
    },
    {
      number: '07',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Unpublish',
    },
    {
      number: '08',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Publish',
    },
    {
      number: '09',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Publish',
    },
    {
      number: '10',
      name: 'Joshua Nwagu',
      ticket: '1233334444',
      prize: 'N100,000',
      category: '1',
      type: 'Unpublish',
    },
  ];

  const handleType = (val) => {
    if (val === 'All Artists') {
      setNavType('All Artists');
      setType('all');
    }
    if (val === 'Artists') {
      setNavType('Artists');
      setType('artists');
    }
    if (val === 'Producers') {
      setNavType('Producers');
      setType('producers');
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
    setActivePage('Artist Catalogue');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   getArtistCatalogue({
  //     setPassError,
  //     toggleAlertBar,
  //     toggleLoad,
  //     search,
  //     type,
  //     date,
  //     page,
  //   });
  // }, [type, search, date, page]);

  return (
    <>
      {!view && (
        <Container>
          <ArtistPublishModal modal={modal} setModal={setModal} />
          <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
            <StatV2 value={7} title={'Total Artist'}></StatV2>
            <StatV2 value={3} title={'Artists Joined Today'}></StatV2>
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
            <div className='ml-auto flex  w-[34%]'>
              <Filter setShowFilter={setShowFilter} showFilter={showFilter} />
              {showFilter && (
                <FilterCard
                  date={date}
                  setDate={setDate}
                  handleFilter={() => setShowFilter(false)}
                  setDateValue={setDateValue}
                  dateValue={dateValue}
                />
              )}
              <SearchAdmin
                onChange={(e) => setSearch(e.target.value)}
              ></SearchAdmin>
            </div>
          </section>

          <Wrapper2>
            <div className='card-container'>
              {data.map((item, index) => {
                return (
                  <ArtistCard
                    item={item}
                    key={index}
                    setView={setView}
                    setModal={setModal}
                  />
                );
              })}
            </div>
          </Wrapper2>

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
              count={totalPage && totalPage}
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
      )}
      {view && <SingleArtistCatalogue setView={setView} />}
    </>
  );
};

export default ArtistCatalogue;

const Wrapper2 = styled.section`
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #cecccc;
  border-radius: 20px;
  padding: 4rem 4rem;

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-wrap: wrap; */
    gap: 2rem;
  }
`;
