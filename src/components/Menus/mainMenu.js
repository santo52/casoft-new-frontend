import React, { useState, useEffect } from 'react'
import { axios } from '../../utils/axios'

import {
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const items = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    url: '/'
  },
  {
    title: 'Recursos Humanos',
    icon: 'rrhh',
    url: '/rrhh'
  },
  {
    title: 'Retardos',
    icon: 'lates',
    url: '/retardos'
  },
  {
    title: 'Consulta de datos',
    icon: 'dashboard',
    url: '/datos'
  },
  {
    title: 'Consulta de bases de datos nacionales',
    icon: 'rrhh',
    url: '/base-de-datos-nacionales'
  },
  {
    title: 'Novedades',
    icon: 'lates',
    url: '/novedades'
  }
]


const buildMenu = (menu, parent) => (
  menu.filter(({ menuId }) => parent === menuId)
    .sort((a,b) => a.order - b.order)
    .map(item => {
      const child = buildMenu(menu, item._id)
      return { ...item, child }
    })
)

const printMenu = (item, position = 0) => {
  if (item.child.length) {
    const values = item.child.map(child => printMenu(child))
    return <ul key={item._id}>
      <li className="collapsed">
        <div className="item-container" >
          <div className="title parent">
            <span className={`icon icon-${item.icon}`}></span>
            <span className="text">{item.name}</span>
          </div>
          {values}
        </div>
      </li>
    </ul>
  }


  return <ul key={item._id} >
    <li>
      <Link to={item.route} >
        <div className="title">
          <span className={`icon icon-${item.icon}`}></span>
          <span className="text">{item.name}</span>
        </div>
      </Link>
    </li>
  </ul>
}


function MainMenu() {

  const [menu, setMenu] = useState([])

  useEffect(() => {
    axios.get('/menus').then(menus => {
      setMenu(buildMenu(menus))
    })

  }, [])

  return (
    <nav>
      <ul>
        {menu.map(item => printMenu(item))}
      </ul>
    </nav>
  )
}

export default MainMenu