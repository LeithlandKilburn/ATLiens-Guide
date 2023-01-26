import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/AuthSlice';
import { setFormType } from '../store/slices/EditWordSlice';
import { setFormLogInType } from '../store/slices/AuthSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  // console.log('from navbar', user);
  const authToken = useSelector((state) => state.auth.authToken);

  const handleLogOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleAddWord = () => {
    dispatch(setFormType('add'));
  };

  const handleLogInForm = () => {
    dispatch(setFormLogInType('log in'));
  };

  const handleSignUpForm = () => {
    dispatch(setFormLogInType('sign up'));
  };

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

        <MenuItem icon={<Columns />} component={<NavLink to="/forum" />}>
          Slang Forum
        </MenuItem>

        {/* if there is no user, show  */}
        {Object.keys(user).length === 0 ? (
          <>
            <MenuItem
              icon={<LogIn />}
              onClick={handleLogInForm}
              component={<NavLink to="/login" />}
            >
              Log In
            </MenuItem>
            <MenuItem
              icon={<UserPlus />}
              onClick={handleSignUpForm}
              component={<NavLink to="/signup" />}
            >
              Sign Up
            </MenuItem>
          </>
        ) : null}

        {/* if there is user, show  */}
        {Object.keys(user).length !== 0 ? (
          <>
            <MenuItem icon={<Save />} component={<NavLink to="/saved" />}>
              Saved
            </MenuItem>
            <MenuItem
              icon={<PlusCircle />}
              onClick={handleAddWord}
              component={<NavLink to="/add" />}
            >
              Add
            </MenuItem>
            <MenuItem icon={<LogOut />} onClick={handleLogOut}>
              Log Out
            </MenuItem>
          </>
        ) : null}
      </Menu>
    </div>
  );
};

export default Navbar;
