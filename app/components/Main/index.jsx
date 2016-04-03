
import React, {PropTypes} from 'react'
import Header from '../Header/index.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
      	<Header />
        {this.props.children}
      </div>
    );
  }
}
