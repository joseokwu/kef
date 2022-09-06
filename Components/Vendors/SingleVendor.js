import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import StatV2 from '../Cards/Stats-v2';
import StartDrawModal from '../RaffleDraws/StartDrawModal';
import GoBack from '../GoBack';
import Loading from '../Loading';
import { useRouter } from 'next/router';
import BranchCard from './BranchCard';
import AddBranchModal from './AddBranchModal';
import VendorCircle from './VendorCircle';
import useVendors from '../../hooks/admin/useVendors';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';

const SingleVendor = () => {
  const [list, setList] = useState();
  const [modal, setModal] = useState(false);
  const [passError, setPassError] = useState('');
  const [loading, setLoading] = useState(false);
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();
  const { id } = router.query;

  const {
    getSingleVendor,
    stateVendors: {
      singleVendorData: {
        branches,
        vendorBranchCount,
        vendorLogo,
        vendorName,
        vendorTotalTransaction,
      },
    },
  } = useVendors();

  const handleStartDraw = () => {
    setModal(true);
  };

  const branch = [
    {
      name: 'The Place, Lekki',
      total: 'N300,000',
      link: 'shop.id.12jdwufjvigohktoffcu',
    },
    {
      name: 'The Place, Lekki',
      total: 'N300,000',
      link: 'shop.id.12jdwufjvigohktoffcu',
    },
    {
      name: 'The Place, Lekki',
      total: 'N300,000',
      link: 'shop.id.12jdwufjvigohktoffcu',
    },
    {
      name: 'The Place, Lekki',
      total: 'N300,000',
      link: 'shop.id.12jdwufjvigohktoffcu',
    },
  ];

  useEffect(() => {
    if (id) {
      getSingleVendor({
        setLoading,
        toggleAlertBar,
        toggleLoad,
        setPassError,
        uuid: id,
      });
    }
  }, [router]);

  return (
    <>
      <AddBranchModal
        setModal={setModal}
        modal={modal}
        startDraw={() => setList(1)}
      />
      <GoBack
        text={'Go Back'}
        onClick={() => {
          router.back();
        }}
      />

      <>
        <Wrapper3 className=''>
          <VendorCircle item={vendorLogo ?? vendorLogo} />
          <StatV2
            value={vendorTotalTransaction && vendorTotalTransaction}
            title={'Total Transactions'}
          ></StatV2>
          <StatV2
            value={vendorBranchCount && vendorBranchCount}
            title={'Total Branch'}
          ></StatV2>
        </Wrapper3>
      </>

      <Wrapper>
        <Wrapper2>
          <div className='card-container'>
            <div className='header'>
              <h2 className='title'>Branch</h2>
              <button className='activate' onClick={() => setModal(true)}>
                Add Branch
              </button>
            </div>
            {loading ? (
              <Loading />
            ) : branches.length > 0 ? (
              branches?.map((item, index) => {
                return <BranchCard item={item} key={index} />;
              })
            ) : (
              <Wrapper1>No Branch Available</Wrapper1>
            )}
          </div>
        </Wrapper2>
      </Wrapper>
    </>
  );
};

export default SingleVendor;

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
    /* height: 20rem; */

    .top-left {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      border-radius: 20px;
      width: 60%;
      /* height: 60%; */
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
  background: #ffffff;
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
const Wrapper3 = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  gap: 2rem;
  width: 90%;
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
