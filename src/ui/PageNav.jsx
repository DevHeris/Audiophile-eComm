import { useRef } from 'react';

import styles from './PageNav.module.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function PageNav() {
  const sidebarRef = useRef();

  function showSidebar() {
    sidebarRef.current.style.display = 'flex';
  }

  function hideSidebar() {
    sidebarRef.current.style.display = 'none';
  }

  return (
    <nav className="w-full text-xs  font-extrabold tracking-wide">
      <ul ref={sidebarRef} className={styles.sidebar}>
        <li onClick={hideSidebar} className="cursor-pointer">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              />
            </svg>
          </a>
        </li>
        <li>
          <NavLink to="/" onClick={hideSidebar}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/headphones" onClick={hideSidebar}>
            HEADPHONES
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/speakers" onClick={hideSidebar}>
            SPEAKERS
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/earphones" onClick={hideSidebar}>
            EARPHONES
          </NavLink>
        </li>
      </ul>
      <ul className="grid grid-cols-[.4fr_1fr] items-center justify-center sm:grid-cols-[.15fr_1fr] md:block">
        <li className={styles.menuButton} onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
              <g fill="#fff" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          </a>
        </li>
        <div className="flex items-center justify-between gap-6 border-gray-600 md:m-auto md:w-[85%] md:border-b md:pb-3 ">
          <div>
            <li>
              <Logo />
            </li>
          </div>
          <div className="flex gap-7">
            <li className={styles.hideOnMobile}>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className={styles.hideOnMobile}>
              <NavLink to="/category/headphones">HEADPHONES</NavLink>
            </li>
            <li className={styles.hideOnMobile}>
              <NavLink to="/category/speakers">SPEAKERS</NavLink>
            </li>
            <li className={styles.hideOnMobile}>
              <NavLink to="/category/earphones">EARPHONES</NavLink>
            </li>
          </div>
          <div>
            <li className="flex cursor-pointer items-center justify-center">
              <img
                src="./src/assets/shared/desktop/icon-cart.svg"
                alt="cart logo"
              />
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default PageNav;
