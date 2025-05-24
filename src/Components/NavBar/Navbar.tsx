import React from 'react';
import './Navbar.css';
import InputTextField from '../InputTextField/InputTextField';

export interface NavBarProps {
  onSearch: (searchText?: string) => void;
}
const Navbar = ({ onSearch }: NavBarProps) => {
  return (
    <div className="NavbarWrp">
      <div>
        <img src="../../../public/Images/Logo.jpg" alt="Logo" className="img" />
      </div>
      <div>
        <InputTextField onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Navbar;
