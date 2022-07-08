import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const AutomatedCard = ({
  title,
  description,
  actionBtn,
  action,
  onClick,
  activateSettings,
}) => {
  return (
    <Wrapper>
      <div className='content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='bottom'>
          <span onClick={onClick}>{actionBtn}</span>
          <input
            type='checkbox'
            id={title}
            defaultChecked={action}
            className='checkbox'
            onChange={(e) => activateSettings(e.target.checked)}
          />
          <label htmlFor={title} className='toggle'></label>
        </div>
      </div>
    </Wrapper>
  );
};

export default AutomatedCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  height: 25vh;
  width: 35%;
  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  .content {
    width: 70%;
    h3 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      font-size: 1.6rem;
      span {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  /* toggle in label designing */
  .toggle {
    position: relative;
    display: inline-block;
    width: 49px;
    height: 24px;
    background-color: #71737f;
    border-radius: 20px;
    border: 2px solid gray;
  }

  /* After slide changes */
  .toggle:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    /* top: 1px; */
    left: 1px;
    transition: all 0.5s;
  }

  /* Checkbox checked effect */
  .checkbox:checked + .toggle::after {
    left: 24px;
  }

  /* Checkbox checked toggle label bg color */
  .checkbox:checked + .toggle {
    background-color: #20bb55;
  }

  /* Checkbox vanished */
  .checkbox {
    display: none;
  }
`;
