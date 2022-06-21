import React from 'react';
import '../css/header.css';
import config from '../config';
import Modal from './Modal';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <a href="#" className='logo'>{ config.name }</a>
          <div className='divider'></div>
          <a href="#" className='nav__btn'>Главная</a>
          <a href="#about" className='nav__btn'>Обо мне</a>
          <a href="#projects" className='nav__btn'>Проекты</a>
          <a href="#team" className='nav__btn'>Команда</a>
          <a href="#contacts" className='nav__btn'>Где меня найти?</a>
          <Modal>
            <a href="#" className='nav__btn nav__btn--in-modal'>Главная</a>
            <a href="#about" className='nav__btn nav__btn--in-modal'>Обо мне</a>
            <a href="#projects" className='nav__btn nav__btn--in-modal'>Проекты</a>
            <a href="#team" className='nav__btn nav__btn--in-modal'>Команда</a>
            <a href="#contacts" className='nav__btn nav__btn--in-modal'>Где меня найти?</a>
          </Modal>
        </nav>
      </header>
    );
  }
}

export default Header;
