import React from 'react'
function TopMenu({ toggleCollapse }) {
  return (
    <nav className="top-menu">
      <div className="left-buttons">
        <span onClick={toggleCollapse} id="hamburguer-menu-button" className="icon icon-menu"></span>
      </div>
      <div className="right-buttons"></div>
    </nav>
  )
}

export default TopMenu