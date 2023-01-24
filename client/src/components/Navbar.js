import React from 'react';
import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

import {
  Home,
  AlignCenter,
  Save,
  UserPlus,
  LogIn,
  LogOut,
  PlusCircle,
  Columns,
} from 'react-feather';

const Navbar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="nav-cont">
      <Menu>
        <MenuItem
          icon={<AlignCenter />}
          onClick={() => collapseSidebar()}
          className="title-menu-item"
        >
          ATLiens
        </MenuItem>
        <MenuItem icon={<Home />} component={<NavLink to="/" />}>
          Home
        </MenuItem>
        <MenuItem icon={<LogIn />} component={<NavLink to="/login" />}>
          Login
        </MenuItem>
        <MenuItem icon={<UserPlus />}> Sign Up</MenuItem>
        <MenuItem icon={<Save />}> Saved</MenuItem>
        <MenuItem icon={<Columns />} component={<NavLink to="/forum" />}> Slang Forum</MenuItem>
        <MenuItem icon={<PlusCircle />}> Add</MenuItem>
        <MenuItem icon={<LogOut />}> Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
