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
    <nav className="text-sm font-semibold">
      <ul ref={sidebarRef} className={styles.sidebar}>
        <li onClick={hideSidebar}>
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
      <ul className="w-full">
        <li className={styles.menuButton} onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
              <g fill="#fff" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          </a>
        </li>
        <div className="m-auto flex w-[80%] items-center justify-between">
          <div>
            <li>
              <NavLink>
                <Logo />
              </NavLink>
            </li>
          </div>
          <div className="flex gap-5">
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
          <div className={styles.hideOnMobile}>
            <li className="flex items-center justify-center">
              <img
                src="src/assets/shared/desktop/icon-cart.svg"
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
