import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import MusicPlayerV2 from '../MusicPlayer-v2';
import MusicPlayer from '../MusicPlayer';
import MusicPlayer2 from '../MusicPlayer2';
import { Modal } from '../modal';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog({ popUp, setPopUp }) {
  return (
    <>
      <Tint onClick={() => setPopUp(false)} />
      <Wrapper>
        <div className={`container ${popUp === true && 'show-modal'}`}>
          <div className='image'>
            <img src='/party-phone.svg' alt='party' />
          </div>
          <div className='main-section'>
            <div className='right-top'>
              <div className='right-top-first'>
                <h1>Concert Mix</h1>
                <div className='album'>
                  <h4>
                    Album <span> - Kalakuta Republic</span>
                  </h4>
                  <h4>
                    Year of release <span> - 2022</span>
                  </h4>
                </div>
                <h4>
                  Record Label <span> - Gang Bangers</span>
                </h4>
              </div>
              <button>Edit Catalogue</button>
            </div>
            <hr />
            <div className='right-bottom'>
              <MusicPlayerV2 />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
export const Tint = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.55);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 30vh;
  bottom: 0;
  right: 0;
  width: 77.5%;
  z-index: 999;
  .container {
    display: flex;
    /* width: 90%; */
    padding: 5rem 5rem;
    height: calc(70vh);
    /* margin-left: auto;
    margin-right: auto; */
    transition: 0.3s ease-in-out all;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    transform: translateY(+100%);
    z-index: -1;
    background: white;
  }
  .right-bottom {
    margin-top: 3rem;
  }
  .show-modal {
    z-index: 999;
    transform: translateY(0);
  }
  .image {
    margin-top: -15rem;
    width: 30%;
    img {
      width: 25rem;
      height: 25rem;
    }
  }

  .main-section {
    width: 70%;
  }
  .right-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    button {
      font-size: 1.6rem;
      border-radius: 10px;
      padding: 15px 10px;
      font-weight: 700;
      width: 15rem;
      border: 1px solid #a608a3;
      filter: drop-shadow(0px 10px 34px rgba(255, 255, 255, 0.23));
      border-radius: 10px;
    }
  }
  .right-top-first {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
    h4 {
      display: flex;
      color: #bdbcbc;
    }
    span {
      display: flex;
      color: #878484;
    }
  }

  .album {
    display: flex;
    gap: 2rem;
  }
`;