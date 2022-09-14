import React from 'react';
import UsersBar from './UsersBar';

const Users = ({ setModal, setIsEditing }) => {
  const data = [
    {
      name: 'Mr.ID',
      email: 'john@gmail.com',
      role: 'admin',
    },
    {
      name: 'Mr.ID',
      email: 'john@gmail.com',
      role: 'admin',
    },
    {
      name: 'Mr.ID',
      email: 'john@gmail.com',
      role: 'admin',
    },
    {
      name: 'Mr.ID',
      email: 'john@gmail.com',
      role: 'admin',
    },
    {
      name: 'Mr.ID',
      email: 'john@gmail.com',
      role: 'admin',
    },
  ];
  return data.map((item, index) => {
    return (
      <UsersBar
        key={index}
        item={item}
        setModal={setModal}
        setIsEditing={setIsEditing}
      />
    );
  });
};

export default Users;
