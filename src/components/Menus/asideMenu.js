import React from 'react'
import Profile from '../profile'
import MainMenu from './mainMenu'

function AsideMenu() {
  return (
    <div className="aside-menu">
      <div className="aside-menu-information">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="short-logo">
          <img src="/short-logo.png" alt="short-logo" />
        </div>
        <Profile />
      </div>
      <MainMenu />
    </div>
  )
}

export default AsideMenu