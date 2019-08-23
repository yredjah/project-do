// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import logo from './do_logo.png';
// == Import : local
import './header.scss';

// == Composants

const Header = ({ 
  nav, 
  setItem, 
  activeItem,  
}) => {

  const handleItemClick = (e, { name }) => setItem(name);

  return (
    <div className="header">
      <div className="container-header" >
        <Link to="/" exact><h1 id="title"><img className="logo" src={logo} alt="" /></h1></Link>
        <div className="nav">
          <Segment inverted>
            <Menu inverted secondary size='small'>
              {nav.map(nav => (
                <Link to={nav.route} exact>
                  <Menu.Item
                    key={nav.id}
                    name={nav.name}
                    active={activeItem === nav.name}
                    onClick={handleItemClick}
                    className="menu-nav"
                  >
                    {nav.title}
                  </Menu.Item>
                </Link>
              ))}
            </Menu>
          </Segment>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  activeItem: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// == Export
export default Header; 
