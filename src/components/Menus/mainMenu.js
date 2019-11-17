import React from 'react'

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

function MainMenu() {
  return (
    <nav>
      <ul>
        {items.map(item =>
          <li key={item.title} >
            <Link to={item.url}>
              <span className={`icon icon-${item.icon}`}></span>
              <span className="text">{item.title}</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MainMenu