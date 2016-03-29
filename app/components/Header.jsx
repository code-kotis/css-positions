import React, {PropTypes} from 'react';
import classNames from 'classnames';

require('./Header.css');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  navigateTo() {
  }

  render() {
    const {isActive} = this.state;
    const menuClasses = classNames('menu__list');
    return (
      <header>
        <div className="logo">
          .&#123; <span>css <sup>positions</sup></span> &#125;;
        </div>
        <ul className="menu" onClick={this.navigateTo}>
          <li className="menu__list menu--active">static</li>
          <li className={menuClasses}>absolute</li>
          <li className={menuClasses}>relative</li>
          <li className={menuClasses}>fixed</li>
          <li className={menuClasses}>sticky</li>
        </ul>
      </header>
    );
  }
}
