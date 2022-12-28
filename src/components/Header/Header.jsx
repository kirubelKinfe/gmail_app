import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import SettingsIcon from '@material-ui/icons/Settings'
import { ArrowDropDown } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../utils/firebaseDb'

const Header = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
        dispatch(logout())
    }) 
  }

  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='' />
        </div>
        <div className="header__middle">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder='Search mail' type="text" />
            <ArrowDropDown className='header__inputCaret' />
        </div>
        <div className="header__right">
            <IconButton>
                <SettingsIcon />
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <Avatar onClick={signOut} className='avatar' src={user?.photoURL} />
        </div>
    </div>
  )
}

export default Header