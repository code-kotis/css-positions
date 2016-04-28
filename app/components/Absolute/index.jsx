import React, {PropTypes} from 'react';
import Styles from './Absolute.css';

export default class Absolute extends React.Component {
  render() {
    return (
      <div>
        <h2>In Absolute positioning the element is taken out of the normal document flow and is placed relative to the nearest positioned ancestor and therefore does not take any space while placing other elements. If no nearest positioned ancestor exists , initial container is taken. We need to specify the top , left , right , bottom positions to achieve the desired position. If we dont specify some value , it is set to auto i.e. the browser decides its value.</h2>
        <h2> In the images below, for the second image top is 300px and left is 200px. Therefore it is 300px from top and 200px left with respect to the document. For third image top is 400px and left is 400px. Therefore it is 400px from top and 400px left with respect to the document.</h2>
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