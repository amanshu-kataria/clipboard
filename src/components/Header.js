import React, { Component } from 'react';
import Logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img height="18px" src={Logo} alt="Logo" />
        <div className="header-title">Clipboard</div>
      </div>
    );
  }
}

export default Header;
