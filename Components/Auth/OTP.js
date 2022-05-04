import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthStatus from './Status';
import { useRouter } from 'next/router';
import { setLoginStatus } from '../../store/user';
import { baseInstanceAPI } from '../../axios';
import useLoading from '../../hooks/useLoading';
import useShowAlert from '../../hooks/useShowAlert';

const OTP = ({ action }) => {
  const inputAmount = [1, 2, 3, 4, 5, 6];
  const { isLoading, toggleLoad } = useLoading();
  const [otp, setOtp] = useState([]);
  const [uuid, setUuid] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const toggleAlertBar = useShowAlert();
  const router = useRouter();
  const onSuccess = () => {
    dispatch(setLoginStatus(true));
    router.replace('/dashboard');
  };

  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.uuid);
    setUuid(router.query.uuid);
  }, [router.isReady]);

  const onVerify = async () => {
    const data = { uuid: uuid, otp: otp.toString().replace(/,/g, '') };
    console.log('data is ', JSON.stringify(data));
    toggleLoad();
    try {
      const response = await baseInstanceAPI.post(
        'account/verify-otp',
        JSON.stringify(data)
      );
      console.log(response);
      toggleAlertBar('OTP verified successfully!', 'success', true);
      router.push(`/auth/create-account/${response.data.verifiedToken}`);
    } catch (error) {
      if (!error.response) {
        console.log('No response from the servver');
        setError('Network Error');
      } else {
        setError('OTP verification failed');
      }
      console.log('An error has occured', error.response);
    }
    toggleLoad();
  };

  return (
    <>
      {!showStatus && (
        <div className='auth-container !mb-[10rem]'>
          <form
            className='auth-form'
            onSubmit={(e) => {
              e.preventDefault();
              onVerify();
              // router.push("/auth/create-account");
              // console.log("otp is:", otp.toString().replace(/,/g, ""));
              // setShowStatus(true);
            }}
          >
            <h3>OTP Verification</h3>
            <p className='mb-[3.6rem]'>
              Enter the code that was sent to your mail to continue
              registration.
            </p>
            {error && <p className=' !text-[1.4rem] !text-red-500'>*{error}</p>}
            <div className='grid grid-cols-6 gap-5 gap-y-[2.4rem]'>
              {inputAmount.map((el, i) => {
                return (
                  <div key={el} className='form-group '>
                    <input
                      required
                      onChange={(e) => {
                        setOtp((value) => {
                          const newOTP = value;
                          newOTP[i] = e.target.value;
                          console.log(newOTP);
                          return newOTP;
                        });
                      }}
                      type={'tel'}
                      className='!px-[2.5rem] h-[7rem] w-[6.7rem] grid place-items-center'
                      maxLength={1}
                    />
                  </div>
                );
              })}

              <button className='btn col-span-6 mt-[6.8rem]'>Verify OTP</button>
            </div>
          </form>
        </div>
      )}
      {showStatus && (
        <AuthStatus action={onSuccess} status={'success'}></AuthStatus>
      )}
    </>
  );
};

export default OTP;
