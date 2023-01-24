import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/AuthSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout()); //clear authentication token from the store
    navigate('/');
  };

  return (
    <Menu>
      <MenuItem
        icon={<AlignCenter />}
        onClick={() => collapseSidebar()}
        className="title-menu-item"
      >
        ATLiens
      </MenuItem>
      <MenuItem
        icon={<Home />}
        component={
          <NavLink
            to="/"
            // className={({ isActive }) =>
            //   isActive ? 'nav-link active' : 'nav-link'
            // }
          />
        }
      >
        Home
      </MenuItem>
      <MenuItem icon={<LogIn />} component={<NavLink to="/login" />}>
        Log In
      </MenuItem>
      <MenuItem icon={<UserPlus />} component={<NavLink to="/signup" />}>
        Sign Up
      </MenuItem>
      <MenuItem icon={<Save />}> Saved</MenuItem>
      <MenuItem icon={<LogOut />} onClick={handleLogOut}>
        Log Out
      </MenuItem>
      <MenuItem
        icon={<PlusCircle />}
        component={
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          />
        }
      >
        Add
      </MenuItem>
    </Menu>
  );
};

export default Navbar;
