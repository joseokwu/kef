import React from 'react';
import Link from 'next/link';

const AdminAuthHeader = () => {
  return (
    <header className='flex items-center px-[12.5rem] py-[5.6rem] fixed top-0 left-0 w-full z-10'>
      <Link href={'/'}>
        <img className='w-[8.9rem] cursor-pointer' src='/kef-logo.svg'></img>
      </Link>
    </header>
  );
};

export default AdminAuthHeader;
