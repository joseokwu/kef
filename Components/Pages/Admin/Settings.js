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
import NavV2 from '../../NavPill/V2';
import EmailTemplateModal from '../../Settings/EmailTemplateModal';
import DirectMessageModal from '../../Settings/DirectMessageModal';
import PushModal from '../../Settings/PushModal';
import Notifications from '../../Settings/Notifications';
import Finance from '../../Settings/Finance';
import NigerianPaymentModal from '../../Settings/NigerianPaymentModal';
import DiasporaPaymentModal from '../../Settings/DiasporaPaymentModal';
import CategoryModal from '../../Settings/CategoryModal';
import UserManagement from '../../Settings/UserManagement';

const Settings = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [active, setActive] = useState('Notifications');
  const [passError, setPassError] = useState('');
  const [isProducer, setIsProducer] = useState(false);
  const [navType, setNavType] = useState('Notifications');
  const [search, setSearch] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const { setActivePage } = useAuth();
  const [view, setView] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [directModal, setDirectModal] = useState(false);
  const [pushModal, setPushModal] = useState(false);
  const [nigerianModal, setNigerianModal] = useState();
  const [diasporaModal, setDiasporaModal] = useState();
  const [categoryModal, setCategoryModal] = useState();

  const navs = ['Notifications', 'Finance', 'User Management'];

  const handleType = (val) => {
    if (val === 'Notifications') {
      setNavType('Notifications');
    }
    if (val === 'Finance') {
      setNavType('Finance');
    }
    if (val === 'User Management') {
      setNavType('User Management');
    }
    setPage(1);
  };

  useEffect(() => {
    setActivePage('Settings');
  }, []);

  return (
    <>
      <Container>
        <EmailTemplateModal modal={emailModal} setModal={setEmailModal} />
        <DirectMessageModal modal={directModal} setModal={setDirectModal} />
        <PushModal modal={pushModal} setModal={setPushModal} />
        <NigerianPaymentModal
          modal={nigerianModal}
          setModal={setNigerianModal}
        />
        <DiasporaPaymentModal
          modal={diasporaModal}
          setModal={setDiasporaModal}
        />
        <CategoryModal modal={categoryModal} setModal={setCategoryModal} />
        <section className='mt-[6rem] flex items-center mb-[2.6rem]'>
          <NavV2
            activeNav={navType}
            navs={navs}
            onChange={(val) => {
              handleType(val);
            }}
          />
        </section>

        {navType === 'Notifications' && (
          <Notifications
            setEmailModal={setEmailModal}
            setDirectModal={setDirectModal}
            setPushModal={setPushModal}
          />
        )}
        {navType === 'Finance' && (
          <Finance
            setNigerianModal={setNigerianModal}
            setDiasporaModal={setDiasporaModal}
            setCategoryModal={setCategoryModal}
          />
        )}

        {navType === 'User Management' && <UserManagement />}
      </Container>
    </>
  );
};

export default Settings;

const Wrapper2 = styled.section`
  border: 1px solid #cecccc;
  border-radius: 20px;
  padding: 4rem;
  height: 50rem;

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    .row-leading {
      width: 50%;

      h3 {
        font-size: 2rem;
        font-weight: 600;
        color: rgba(87, 87, 87, 1);
      }
      p {
        font-size: 1.4rem;
        color: rgba(150, 150, 150, 1);
      }
    }
    .row-trailing {
      font-size: 1.6rem;
      font-weight: 700;
      color: #a307a8;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
