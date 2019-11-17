import React from 'react'

const items = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    url: '#'
  },
  {
    title: 'Recursos Humanos',
    icon: 'rrhh',
    url: '#'
  },
  {
    title: 'Retardos',
    icon: 'lates',
    url: '#'
  },
  {
    title: 'Consulta de datos',
    icon: 'dashboard',
    url: '#'
  },
  {
    title: 'Consulta de bases de datos nacionales',
    icon: 'rrhh',
    url: '#'
  },
  {
    title: 'Novedades',
    icon: 'lates',
    url: '#'
  }
]

function MainMenu() {
  return (
    <nav>
      <ul>
        {items.map(item =>
          <li key={item.title} >
            <a href={item.url}>
              <span className={`icon icon-${item.icon}`}></span>
              <span className="text">{item.title}</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MainMenu