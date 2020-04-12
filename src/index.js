import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch, useLocation, BrowserRouter } from 'react-router-dom';
import FileDetails from './FileDetails';

import { createBrowserHistory } from "history";
import Catalogue from './Catalogue';
import MakerList from './MakerList';
import Checkout from './Checkout';

const history = createBrowserHistory();

function SwitchHandler() {
	let location = useLocation();
  
	let background = location.state && location.state.background;

	return (
		<Switch location={background || location}>
			<Route exact path="/" children={<App />} />
			{/* <Route path="/gallery" children={<Catalogue />} /> */}
			<Route path="/FileDetails" component={FileDetails} />
			<Route path="/MakerList" component={MakerList} />
			<Route path="/Checkout" component={Checkout} />
		</Switch>
	);
}


ReactDOM.render(
	<React.StrictMode>
		<nav className='navbar main-nav' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand level'>
					<div className='level-item has-text-centered has-text-white'>
						<h5> MEDIC HUB </h5>
					</div>
            </div>
        </nav>
	  	<BrowserRouter>
			<SwitchHandler />
		</BrowserRouter>
  	</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
