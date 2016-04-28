import React, {PropTypes} from 'react';
import Styles from './Static.css';

export default class Static extends React.Component {
  render() {
    return (
      <div>
        <h2>This is the default position of all the Html elements. In this the elements are positioned according to normal flow of the page. These elements are non-positioned elements. Static positioned elements are not affected by the top, bottom, left, and right properties.</h2>
        <div>
        	<img id="first" className={Styles.firstImage} src={require('../../assets/images/earth.gif')}/>
        </div>
        <div>
        	<img className={Styles.secondImage} src={require('../../assets/images/random.gif')}/>
        </div>
        <div>
        	<img className={Styles.thirdImage} src={require('../../assets/images/kaleido.gif')}/>
        </div>

      </div>
    )
  }
}