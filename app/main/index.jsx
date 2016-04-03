import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/Main/index.jsx';
import { Router, Route, browserHistory } from 'react-router'
import Static from '../components/Static/index.jsx';
import Absolute from '../components/Absolute/index.jsx';
import Sticky from '../components/Sticky/index.jsx';
import Fixed from '../components/Fixed/index.jsx';
import Relative from '../components/Relative/index.jsx';

ReactDOM.render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/static"   component={Static}/>
				<Route path="/fixed"    component={Fixed}/>
				<Route path="/sticky"   component={Sticky}/>
				<Route path="/relative" component={Relative}/>
				<Route path="/absolute" component={Absolute}/>
			</Route>
		</Router>,
  document.body.appendChild(document.createElement('div'))
);
