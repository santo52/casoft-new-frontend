import React from 'react'
import { useState } from 'react'
import TopMenu from './Menus/topMenu'
import AsideMenu from './Menus/asideMenu';
import Content from './content';

function Layout({ children }) {

  const [collapsed, collapse] = useState(false)
  const toggleCollapse = () => collapse(!collapsed)

  return (
    <div className={`Content ${collapsed ? 'Collapse' : ''}`}>
      <AsideMenu />
      <TopMenu toggleCollapse={toggleCollapse} />
      <Content>{children}</Content>
    </div>
  )
}

export default Layout 