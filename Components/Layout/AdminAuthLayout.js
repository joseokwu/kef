import React from 'react';
import AdminAuthHeader from '../AdminAuthHeader';
import Head from 'next/head';

const AdminAuthLayout = ({ children }) => {
  return (
    <div className=' w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto'>
      <Head>
        <title>Kennis Music Fiesta | Authentication</title>
        <meta name='description' content='Kennis Music Fiesta' />
        <link rel='icon' href='/favicon.ico' />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <AdminAuthHeader />
      <main className='mt-[19rem]'>{children}</main>
    </div>
  );
};

export default AdminAuthLayout;
