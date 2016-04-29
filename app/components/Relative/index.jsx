import React, {PropTypes} from 'react';
import Styles from './Relative.css';

export default class Relative extends React.Component {
  render() {
    return (
      <div>
        <h2>In relaive positioning the element is positioned with respect to its normal position (the position in the document flow i.e. static position) . We specify top, left, right and bottom properties to specify the deviation from its normal position. If not specified , it is auto by default. Other content will not be adjusted to fit into any gap left by the element. </h2>
        <h2> In the images below, for the second image top is 0px and left is 200px. Therefore it is 200px left from its normal position. For third image top is 0px and left is 400px. Therefore it is 400px left from its original position.</h2>
        <div>
        	<img className={Styles.firstImage} src={require('../../assets/images/earth.gif')}/>
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