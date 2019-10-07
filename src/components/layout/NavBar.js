import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ icons, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icons} /> {title}
      </h1>
    </nav>
  );
};

NavBar.defaultProps = {
  title: 'Github finder',
  icon: 'fab fa-github'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
