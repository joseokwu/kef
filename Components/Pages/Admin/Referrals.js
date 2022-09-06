import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StatV2 from '../../Cards/Stats-v2';
import Loading from '../../Loading';
import { useRouter } from 'next/router';
import useAuth from '../../../hooks/admin/useAuth';
import ReferralBar from '../../Referrals/ReferralBar';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';
import AddReferralModal from '../../Referrals/AddReferralModal';
import Success from '../../Referrals/Success';
import useReferrals from '../../../hooks/admin/useReferrals';

const Referrals = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [passError, setPassError] = useState('');
  const [name, setName] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();
  const { setActivePage } = useAuth();
  const {
    stateReferrals: {
      referralData: {
        celebrities,
        totalCelebrities,
        totalMintTicket,
        totalSignUps,
      },
      referralLink,
    },
    getReferrals,
    addReferral,
  } = useReferrals();
  const branch = [
    {
      name: 'Mr.ID',
      signUps: '500',
      mintedTickets: '500',
      link: 'user.id.12jdwufjvigohktoffcu',
    },
    {
      name: 'Mr.Macaroni',
      signUps: '500',
      mintedTickets: '500',
      link: 'user.id.12jdwufjvigohktoffcu',
    },
    {
      name: 'Nasty Blaq',
      signUps: '500',
      mintedTickets: '500',
      link: 'user.id.12jdwufjvigohktoffcu',
    },
    {
      name: 'Don Jazzy',
      signUps: '500',
      mintedTickets: '500',
      link: 'user.id.12jdwufjvigohktoffcu',
    },
    {
      name: '2Baba',
      signUps: '500',
      mintedTickets: '500',
      link: 'user.id.12jdwufjvigohktoffcu',
    },
  ];

  const createReferral = (name) => {
    addReferral({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      setSuccess,
      setModal,
      name,
    });
  };

  useEffect(() => {
    setActivePage('Referrals');
    getReferrals({ toggleAlertBar, toggleLoad, setPassError, setLoading });
  }, []);

  return (
    <>
      <AddReferralModal
        setModal={setModal}
        modal={modal}
        createReferral={createReferral}
        startDraw={() => setList(1)}
      />
      <Success
        setModal={setSuccess}
        modal={success}
        referralLink={referralLink ? referralLink : ''}
      />

      <>
        <Wrapper3 className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] gap-[2.6rem] mb-14'>
          <StatV2
            value={totalCelebrities ? totalCelebrities : 0}
            title={'Total Celebrities'}
          ></StatV2>
          <StatV2
            value={totalMintTicket ? totalMintTicket : 0}
            title={'Total Minted Tickets'}
          ></StatV2>
          <StatV2
            value={totalSignUps ? totalSignUps : 0}
            title={'Total Sign Ups'}
          ></StatV2>
        </Wrapper3>
      </>

      <Wrapper>
        <Wrapper2>
          <div className='card-container'>
            <div className='header'>
              <h2 className='title'>Celebrities</h2>
              <button className='activate' onClick={() => setModal(true)}>
                Generate Link
              </button>
            </div>
            {loading ? (
              <Loading />
            ) : celebrities?.length > 0 ? (
              celebrities?.map((item, index) => {
                return <ReferralBar item={item} key={index} />;
              })
            ) : (
              <Wrapper4>No Referrals Available</Wrapper4>
            )}
          </div>
        </Wrapper2>
      </Wrapper>
    </>
  );
};

export default Referrals;

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
    align-items: center;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 90%;
`;

const Wrapper4 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: gray;
`;
