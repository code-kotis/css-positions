import React, {PropTypes} from 'react';
import classNames from 'classnames';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';


require('./Header.css');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }
  render() {
    const {isActive} = this.state;
    const menuClasses = classNames('menu__list');
    return (
      <header>
        <div className="logo">
          .&#123; <span>css <sup>positions</sup></span> &#125;;
        </div>
        <ul className="menu">
          <li className="menu__list menu--active"><Link to="Static">Static</Link></li>
          <li className={menuClasses}><Link to="Absolute">Absolute</Link></li>
          <li className={menuClasses}><Link to="Relative">Relative</Link></li>
          <li className={menuClasses}><Link to="Fixed">Fixed</Link></li>
          <li className={menuClasses}><Link to="Sticky">Sticky</Link></li>
        </ul>
      </header>
    );
  }
}
