import React, { Fragment, useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody } from 'reactstrap';
import classnames from 'classnames';

function Tabs({ children, items }) {

  const elements = React.Children.toArray(children)
  
  const [activedTab, setActivedTab] = useState(0)
  const toggle = (tab) => {
    if (activedTab !== tab) {
      setActivedTab(tab)
    }
  }

  return (
    <Fragment>
      <Nav tabs>
        {elements.map(({ props }, index) => (
            <NavItem key={`nav-link-${index}`}>
              <NavLink
                className={classnames({ active: activedTab === index })}
                onClick={() => { toggle(index); }} >
                {props.title} 
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activedTab}>
        {elements.map((element, index) => (
          <TabPane tabId={index} key={`tab-pane-${index}`}>
            <Card>
              <CardBody>
                {element}
              </CardBody>
            </Card>
          </TabPane>
        ))}
      </TabContent>
    </Fragment>
  )
}

export default Tabs