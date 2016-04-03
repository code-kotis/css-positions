import React, {PropTypes} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';


require('./Header.css');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }
  render() {
    const {isActive} = this.state;
    const menuClass = classNames('menu__list');
    const activeMenu = {background: '#528FCC', color: 'black'};
    return (
      <header>
        <div className="logo">
          .&#123; <span>css <sup>positions</sup></span> &#125;;
        </div>
        <ul className="menu">
          <Link to="Static" activeStyle={activeMenu}><li className={menuClass}>Static</li></Link>
          <Link to="Absolute" activeStyle={activeMenu}><li className={menuClass}>Absolute</li></Link>
          <Link to="Relative" activeStyle={activeMenu}><li className={menuClass}>Relative</li></Link>
          <Link to="Fixed" activeStyle={activeMenu}><li className={menuClass}>Fixed</li></Link>
          <Link to="Sticky" activeStyle={activeMenu}><li className={menuClass}>Sticky</li></Link>
        </ul>
      </header>
    );
  }
}
