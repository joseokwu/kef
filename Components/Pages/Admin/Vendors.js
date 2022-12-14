import React, { useState, useEffect } from 'react';
import StatV2 from '../../Cards/Stats-v2';
import Container from '../../Layout/Container';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';
import useAuth from '../../../hooks/admin/useAuth';
import VendorCard from '../../Vendors/VendorCard';
import { useRouter } from 'next/router';
import Loading from '../../Loading';
import styled from 'styled-components';
import AddVendorModal from '../../Vendors/AddVendorModal';
import useVendors from '../../../hooks/admin/useVendors';

const Vendors = () => {
  const [page, setPage] = useState(1);
  const [passError, setPassError] = useState('');
  const [loading, setLoading] = useState(false);
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();

  const data = [
    {
      name: 'The Place',
      image: '/the-place.svg',
    },
    {
      name: 'The Place',
      image: '/the-place.svg',
    },
    {
      name: 'The Place',
      image: '/the-place.svg',
    },
    {
      name: 'The Place',
      image: '/the-place.svg',
    },
  ];

  const [active, setActive] = useState('All users');
  const [modal, setModal] = useState(false);
  const { setActivePage } = useAuth();
  const {
    getVendors,
    stateVendors: {
      getVendorsData: {
        totalVendorPayments,
        totalVendors,
        vendors,
        totalVendorBranches,
      },
    },
  } = useVendors();

  useEffect(() => {
    setActivePage('Vendors');
    getVendors({ setLoading, toggleAlertBar, toggleLoad, setPassError });
  }, []);

  return (
    <Container>
      <AddVendorModal
        setModal={setModal}
        modal={modal}
        startDraw={() => setList(1)}
      />
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
        <StatV2 value={totalVendors && totalVendors} title={'Vendors'}></StatV2>
        <StatV2
          value={
            totalVendorPayments &&
            `???${totalVendorPayments.toLocaleString('en-US')}`
          }
          title={'Total Transactions'}
        ></StatV2>
        <StatV2
          value={totalVendorBranches && totalVendorBranches}
          title={'Total Branches'}
        ></StatV2>
      </section>
      <Wrapper>
        <Wrapper2>
          <div className='card-container'>
            <div className='header'>
              <h2 className='title'>Active Vendors</h2>
              <button className='activate' onClick={() => setModal(true)}>
                Add Vendor
              </button>
            </div>
            <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] gap-[2.6rem] mb-14'>
              {loading ? (
                <Loading />
              ) : vendors?.length > 0 ? (
                vendors?.map((item, index) => {
                  return (
                    <VendorCard
                      item={item}
                      key={index}
                      onClick={() =>
                        router.push({
                          pathname: '/single-vendor',
                          query: { id: item?.id },
                        })
                      }
                    />
                  );
                })
              ) : (
                <Wrapper1>No Vendors Available</Wrapper1>
              )}
            </section>
          </div>
        </Wrapper2>
      </Wrapper>
    </Container>
  );
};

export default Vendors;

const Wrapper = styled.main`
  margin-top: 3rem;
  .b {
    margin-left: 26rem;
  }
  .top {
    display: flex;
    gap: 5rem;
    align-items: center;
    margin-top: 3rem;

    .top-left {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      border-radius: 20px;
      width: 60%;

      padding: 2rem;
      h3 {
        font-size: 1.8rem;
        font-weight: 700;
      }
      p {
        font-size: 1.4rem;
        width: 70%;
        margin-bottom: 2rem;
      }
      .timer {
        /* width: 30%; */
      }
    }
  }
`;

const Wrapper2 = styled.section`
  border: 1px solid #cecccc;
  border-radius: 20px;
  width: 90%;
  padding: 3rem 3rem;

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: 0.6s ease-in;
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 1rem;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .activate {
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 15px 10px;
    font-weight: 700;
    width: 15rem;
    border: 1px solid #fdc558;
    background: linear-gradient(to right, #a608a3, #c6155f, #d82023);
    color: white;
  }
`;

const Wrapper1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: gray;
  border: 1px solid #cecccc;
  border-radius: 20px;
  height: 30rem;
  width: 100%;
  padding: 3rem 3rem;
  box-shadow: 0px 4px 44px rgba(163, 7, 168, 0.1);
`;
