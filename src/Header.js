import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton,Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

    return (
        <div>
            <div className="header">
                <div className="header__left">
                    <IconButton>
                    <MenuIcon/>
                    </IconButton>
                    <img src="https://images.macrumors.com/t/tTg1lZtIqMWB84FvO6idlYZXMvg=/800x0/filters:quality(90)/article-new/2020/10/newgmaillogo.0.jpg" alt=""/>
                </div>
                <div className="header__middle">
                    <SearchIcon/>
                    <input placeholder="Search mail" type="text"/>
                    <ArrowDropDownIcon className="header__inputCaret"/>
                </div>
                <div className="header__right">
                    <IconButton>
                        <AppsIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                    <Avatar onClick={signOut}src={user?.photoUrl}/>
                </div>
            </div>
        </div>
    )
}

export default Header
