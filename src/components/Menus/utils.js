import { axios } from '../../utils/axios'
import _ from 'underscore'

async function simpleGetMenu() {
  return await axios.get('/menus')
}

export function getParentMenu(menu, pathname, parent) {
  return menu.filter(({ menuId }) => parent ? parent === menuId : !menuId)
    .map(item => {

      const child = menu.filter(({ menuId }) => item._id === menuId)
      const childData = getParentMenu(menu, pathname, item._id)
      
      const someChildIsCollapsed = childData.some(({ isCollapsed, menuId }) => item._id === menuId && isCollapsed)
      const isCollapsed = menu.some(({ menuId, route }) => item._id === menuId && pathname.indexOf(route) !== -1 )

      return {
        ...item,
        hasChild: !!child.length,
        isCollapsed: isCollapsed || someChildIsCollapsed
      }
    })
    .sort((a, b) => a.order - b.order)
}


export const getMenu = _.memoize(simpleGetMenu);