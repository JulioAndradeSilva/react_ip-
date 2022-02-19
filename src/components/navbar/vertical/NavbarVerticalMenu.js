import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, Collapse } from 'react-bootstrap';
import NavbarVerticalMenuItem from './NavbarVerticalMenuItem';
import classNames from 'classnames';
import AppContext from 'context/Context';

const CollapseItems = ({ route }) => {
  const { pathname } = useLocation();

  const openCollapse = childrens => {
    const checkLink = children => {
      if (children.to === pathname) {
        return true;
      }
      return (
        Object.prototype.hasOwnProperty.call(children, 'children') &&
        children.children.some(checkLink)
      );
    };
    return childrens.some(checkLink);
  };

  const [open, setOpen] = useState(openCollapse(route.children));

  return (
    <Nav.Item as="li">
      <Nav.Link
        onClick={() => {
          setOpen(!open);
        }}
        className={classNames('dropdown-indicator cursor-pointer', {
          'text-500': !route.active
        })}
        aria-expanded={open}
        // {...route}
      >
        <NavbarVerticalMenuItem route={route} />
      </Nav.Link>
      <Collapse in={open}>
        <Nav className="flex-column nav" as="ul">
          <NavbarVerticalMenu routes={route.children} />
        </Nav>
      </Collapse>
    </Nav.Item>
  );
};

CollapseItems.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.array.isRequired,
    active: PropTypes.bool
  }).isRequired
};

const NavbarVerticalMenu = ({ routes }) => {
  const {
    config: { showBurgerMenu },
    setConfig
  } = useContext(AppContext);

  const handleNavItemClick = () => {
    if (showBurgerMenu) {
      setConfig('showBurgerMenu', !showBurgerMenu);
    }
  };
  return routes.map(route => {
    if (!route.children) {
      return (
        <Nav.Item as="li" key={route.name} onClick={handleNavItemClick}>
          <NavLink
            exact={route.exact}
            to={
              route.to === '/authentication-modal'
                ? { pathname: '/authentication-modal', state: { open: true } }
                : route.to
            }
            isActive={match => {
              if (!match) {
                return false;
              }
              return route.to !== '#!';
            }}
            className={classNames('nav-link', { 'text-500': !route.active })}
          >
            <NavbarVerticalMenuItem route={route} />
          </NavLink>
        </Nav.Item>
      );
    }
    return <CollapseItems route={route} key={route.name} />;
  });
};

NavbarVerticalMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(NavbarVerticalMenuItem.propTypes))
    .isRequired
};

export default NavbarVerticalMenu;
