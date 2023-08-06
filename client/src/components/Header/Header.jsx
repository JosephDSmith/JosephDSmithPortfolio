import React, { useRef, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import './header.css';

const nav__links = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#projects',
    display: 'Projects',
  },
  {
    path: '#contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const toggleMenue = () => menuRef.current.classList.toggle('show__menu');

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            {/* Logo start */}
            <div className='logo'>Adeeb.dev</div>
            {/* Logo end */}
            {/* menu start */}
            <div className='navigation' ref={menuRef} onClick={toggleMenue}>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <a
                      href={item.path}
                      onClick={(event) => handleLinkClick(event, item.path)}
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__right d-flex align-items-center gap-4'></div>
              <span className='mobile__menu' onClick={toggleMenue}>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
