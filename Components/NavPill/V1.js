import React, { useState } from 'react';
import { useEffect } from 'react';

const NavV1 = ({ navs, onChange, activeNav }) => {
  const [active, setActive] = useState(activeNav);

  useEffect(() => {
    setActive(activeNav);
  }, [activeNav]);

  return (
    <nav className=''>
      <ul className='flex items-center'>
        {navs.map((nav, i) => {
          return (
            <li
              onClick={() => {
                onChange(nav);
              }}
              className={` transition-all px-[1.2rem] py-[.6rem] rounded-full cursor-pointer text-[#777E90] ${
                active == nav
                  ? ' bg-gradient-to-br from-[#A608A3] via-[#C6155F] to-[#D82023] !text-[#FFFFFF]'
                  : ''
              }`}
              key={i}
            >
              <span className=' font-[600] text-[1.2rem] leading-[1.6rem] '>
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
