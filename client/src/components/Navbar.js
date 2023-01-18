import React from 'react';
import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Routes, Route, Link, Router } from 'react-router-dom';

import {
  Home,
  AlignCenter,
  Save,
  UserPlus,
  LogIn,
  LogOut,
  PlusCircle,
} from 'react-feather';

const Navbar = () => {
  const { collapseSidebar } = useProSidebar();
  
  return (
    <Menu>
      <MenuItem
        icon={<AlignCenter />}
        onClick={() => collapseSidebar()}
        className="title-menu-item"
      >
        ATLiens
      </MenuItem>
      <MenuItem icon={<Home />} component={<Link to="/" />}>
        Home
      </MenuItem>
      <MenuItem icon={<LogIn />} component={<Link to="/login" />}>
        Login
      </MenuItem>
      <MenuItem icon={<UserPlus />}> Sign Up</MenuItem>
      <MenuItem icon={<Save />}> Saved</MenuItem>
      <MenuItem icon={<LogOut />}> Log Out</MenuItem>
      <MenuItem icon={<PlusCircle />}> Add</MenuItem>
    </Menu>
  );
};

export default Navbar;
