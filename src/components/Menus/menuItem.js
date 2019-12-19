import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function MenuItem({ hasChild, _id, isCollapsed, icon, name, route, children }) {

    const [collapsed, setCollapsed] = useState(isCollapsed)

    useEffect(() => {
        if(isCollapsed){
            setCollapsed(isCollapsed)
        }
    }, [isCollapsed])
  
    const handleClickParent = (e) => {
      e.stopPropagation()
      setCollapsed(!collapsed)
    }

    const handleClickChildren = (e) => {
        e.stopPropagation()
    }
  
    if (hasChild) {
        return <ul key={_id}>
          <li className={collapsed ? 'collapsed' : ''} onClick={handleClickParent} >
            <div className="item-container" >
              <div className="title parent">
                <span className={`icon icon-${icon}`}></span>
                <span className="text">{name}</span>
              </div>
                {children}
            </div>
          </li>
        </ul>
      }

      return <ul key={_id}>
        <li onClick={handleClickChildren} >
          <Link to={route} >
            <div className="title">
              <span className={`icon icon-${icon}`}></span>
              <span className="text">{name}</span>
            </div>
          </Link>
        </li>
      </ul>
  }

  export default MenuItem