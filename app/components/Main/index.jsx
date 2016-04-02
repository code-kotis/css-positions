
import React from 'react'
import Header from '../Header/index.jsx';
import Static from '../Static/index.jsx';
import Absolute from '../Absolute/index.jsx';
import Sticky from '../Sticky/index.jsx';
import Fixed from '../Fixed/index.jsx';
import Relative from '../Relative/index.jsx';
import { Router, Route, hashHistory } from 'react-router'


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    	<Header />
    	<Router history={hashHistory}>
    		<Route path="/" component={Static}/>
    		<Route path="/fixed" component={Fixed}/>
    		<Route path="/sticky" component={Sticky}/>
    		<Route path="/relative" component={Relative}/>
    		<Route path="/absolute" component={Absolute}/>
    	</Router>
    	</div>
    );
  }
}
