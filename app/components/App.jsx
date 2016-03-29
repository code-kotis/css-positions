import React from 'react';
import Header from './Header.jsx';

require('./App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header />
    );
  }
}
