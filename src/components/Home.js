import React from 'react';
import {Grid} from '@material-ui/core';
import {Route,Switch,Redirect,useLocation} from 'react-router-dom';
import Sorting from './sorting';
import Graph from './graph';
import Tools from './tools';
import Mathematics from './mathematics';
import DataStructure from './datastructure';
import routeIndex from '../route';
import Bubble from './sorting/Bubble';
import Selection from './sorting/Selection';
import Insertion from './sorting/Insertion';
import Merge from './sorting/Merge';
import Quick from './sorting/Quick';
import Shell from './sorting/Shell';
import SideNav from './navigation/Sidenav';
import NavBar from './Navbar';

function Home(){
	const [open,setOpen]=React.useState(false);
	const location=useLocation();
	return <Grid>	
		<NavBar open={open} setOpen={setOpen}/>	
		 {open && <SideNav links={routeIndex(location.pathname)} open={open} setOpen={setOpen}/>}	
		 	
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
				<Route path='/sorting/bubble'>
				<Bubble/>
			</Route>
			<Route path='/sorting/selection'>
				<Selection/>
			</Route>
			<Route path='/sorting/insertion'>
				<Insertion/>
			</Route>
			<Route path='/sorting/merge'>
				<Merge/>
			</Route>
			<Route path='/sorting/quick'>
				<Quick/>
			</Route>
			<Route path='/sorting/shell'>
				<Shell/>
			</Route>
			</Switch>
	</Grid>
}

export default Home;