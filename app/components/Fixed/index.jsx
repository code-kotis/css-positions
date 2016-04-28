import React, {PropTypes} from 'react';
import Styles from './Fixed.css';


export default class Fixed extends React.Component {
  render() {
    return (
      <div>
        <h2>Fixed position is similar to absolute position with the difference that in Fixed position element's containing block is the viewport. This means the element stays in the same place even if the page is scrolled. A fixed element does not leave a gap in the page where it would normally have been located.</h2>

        <div>
        	<img className={Styles.thirdImage} src={require('../../assets/images/kaleido.gif')}/>
        </div>
        <div>
        	<img className={Styles.fourthImage} src={require('../../assets/images/kaleido.gif')}/>
        </div>
      </div>
    )
  }
}