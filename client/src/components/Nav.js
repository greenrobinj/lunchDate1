import React from 'react';
import {NavLink} from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'green',
  }
}

const Nav = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {'  '}
    <NavLink exact activeStyle={styles.active} to="/about">About Here</NavLink>
    </nav>
)

export default Nav;