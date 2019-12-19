import React, { useState, useEffect } from 'react'
import MenuItem from './menuItem'
import { getParentMenu } from './utils'

function MenuList({ list, pathname, parent }) {

  const [parentItems, setParentItems] = useState([])
  useEffect(() => {
    if (list.length) {
      const items = getParentMenu(list, pathname, parent)
      setParentItems(items)
    }
  }, [list])

  return (
    <>
      {parentItems.map(item =>
        <MenuItem key={item._id} {...item} >
          <MenuList list={list} pathname={pathname} parent={item._id} />
        </MenuItem>
      )}
    </>
  )
}

export default MenuList