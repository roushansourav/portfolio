import React from 'react';
import {Grid} from '@material-ui/core';
import {Route,Switch,Redirect,useLocation} from 'react-router-dom';
import Sorting from './sorting';
import Graph from './graph';
import Tools from './tools';
import Mathematics from './mathematics';
import DataStructure from './datastructure';
import Navbar from './Navbar';
import routeIndex from '../route';

function App(){
	const location=useLocation();
	return <Grid>	
			<Navbar routeIndex={routeIndex(location.pathname)}/>
			<h1>Hi I am Roushan Sourav</h1>	
			<Switch>
				<Route exact path='/home'>
					<Redirect to='/'/>
				</Route> 
				<Route exact path='/sorting'>
				<Sorting />
				</Route>
				<Route exact path='/graph'>
					<Graph/>
				</Route>
				<Route exact path='/mathematics'>
				<Mathematics/>
				</Route>
				<Route exact path='/datastructures'>
				<DataStructure/>
				</Route>
				<Route exact path ='/tools'>
				<Tools/>
				</Route>
			</Switch>
	</Grid>
}

export default App;