import React, { useState } from 'react';

const NavV1 = ({ navs, onChange, activeNav }) => {
  const [active, setActive] = useState(activeNav);
  return (
    <nav className=''>
      <ul className='flex items-center'>
        {navs.map((nav, i) => {
          return (
            <li
              onClick={() => {
                setActive(nav);
                onChange(nav);
              }}
              className={` transition-all px-[1.2rem] py-[.6rem] rounded-full cursor-pointer text-[#777E90] ${
                active == nav ? ' bg-[#070201] !text-[#FCAC0D]' : ''
              }`}
              key={i}
            >
              <span className=' font-bold text-[1.2rem] leading-[1.6rem] '>
                {nav}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavV1;
