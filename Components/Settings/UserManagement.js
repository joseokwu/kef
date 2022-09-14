import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../Loading';
import { useRouter } from 'next/router';
import useAuth from '../../hooks/admin/useAuth';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import AddReferralModal from '../Referrals/AddReferralModal';
import Success from '../Referrals/Success';
import NavV1 from '../NavPill/V1';
import Users from './Users';
import AddUserModal from './AddUserModal';
import Roles from './Roles';
import AddRoleModal from './AddRoleModal';

const UserManagement = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const [addRoleModal, setAddRoleModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [passError, setPassError] = useState('');
  const [active, setActive] = useState('Users');
  const [navType, setNavType] = useState('Users');
  const [name, setName] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();
  const { setActivePage } = useAuth();

  const navs = ['Users', 'Roles & Permissions'];

  const handleType = (val) => {
    if (val === 'Users') {
      setNavType('Users');
    }
    if (val === 'Roles & Permissions') {
      setNavType('Roles & Permissions');
    }
  };

  return (
    <>
      <AddUserModal
        modal={addUserModal}
        setModal={setAddUserModal}
        isEditing={isEditing}
      />

      <AddRoleModal
        modal={addRoleModal}
        setModal={setAddRoleModal}
        isEditing={isEditing}
      />

      <Wrapper>
        <Wrapper2>
          <div className='card-container'>
            <div className='header'>
              {/* <h2 className='title'>Celebrities</h2> */}
              <NavV1
                activeNav={navType}
                navs={navs}
                onChange={(val) => {
                  handleType(val);
                }}
              />
              <div className='btn-container'>
                <button
                  className='activate1'
                  onClick={() => setAddRoleModal(true)}
                >
                  Add Roles
                </button>
                <button
                  className='activate'
                  onClick={() => {
                    setAddUserModal(true);
                    setIsEditing(false);
                  }}
                >
                  Add Users
                </button>
              </div>
            </div>
            {navType === 'Users' && (
              <Users
                setModal={setAddUserModal}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            )}
            {navType === 'Roles & Permissions' && <Roles />}
          </div>
        </Wrapper2>
      </Wrapper>
    </>
  );
};

export default UserManagement;

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
    transition: all 0.6s ease-in;
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

  /* .btn-container{

  } */
  .activate {
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 15px 10px;
    font-weight: 700;
    width: 15rem;
    border: 1px solid #fdc558;
    background: linear-gradient(to right, #a608a3, #c6155f, #d82023);
    color: white;
    margin-left: 2rem;
  }

  .activate1 {
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 15px 10px;
    font-weight: 700;
    width: 15rem;
    border: 2px solid #c6155f;
    background: white;
    color: black;
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
