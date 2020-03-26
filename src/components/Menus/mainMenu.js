import React, { useState, useEffect } from 'react'
import { getMenu } from './utils'
import MenuList from './menuList'
import { useLocation } from "react-router-dom"
import _ from 'underscore'


function MainMenu() {

  const [menu, setMenu] = useState([])
  const { pathname } = useLocation()

  useEffect(() => {
    const fetchApi = async () => setMenu(await getMenu())
    fetchApi()
  }, [])

  return (
    <nav>
      <MenuList list={menu} pathname={pathname} />
    </nav>
  )
}

export default MainMenu