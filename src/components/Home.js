import React from 'react';
import {Grid} from '@material-ui/core';
import {Route,Switch,Redirect,useLocation} from 'react-router-dom';
import Sorting from './sorting';
import Graph from './graph';
import Tools from './tools';
import Mathematics from './mathematics';
import DataStructure from './datastructure';
import Bubble from './sorting/Bubble';
import Selection from './sorting/Selection';
import Insertion from './sorting/Insertion';
import Merge from './sorting/Merge';
import Quick from './sorting/Quick';
import Shell from './sorting/Shell';
import SideNav from './navigation/Sidenav';
import NavBar from './Navbar';
import styled from 'styled-components';

const Main=styled.div`
	display:flex;
	width:100%;
	height:100vh;
	transition:width 0.4s ease-out;
	&::-webkit-scrollbar {
  			width: 0.25em;
		};	
	&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 6px rgba(0, 0, 255, 0.3);
		};	
	&::-webkit-scrollbar-thumb {
			background-color: green;
		};
`;
const SecondaryMain=styled.div`
	display:flex;
	flex-wrap:wrap;
	align-content:flex-start;
	padding:0.25rem;
	width:${props=>(props.open? 'calc(100% - 320px)':'100%')};
	transition:width 0.4s ease-out;
	&::-webkit-scrollbar {
  			width: 0.25em;
		};	
	&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 6px rgba(0, 0, 255, 0.3);
		};	
	&::-webkit-scrollbar-thumb {
			background-color: green;
		};
`;
const SidenavContainer=styled.div`
		max-width:300px;
		overflow-x:hidden;
		width:${props=>props.open?'40%':'0px'};
		transition:width 0.3s ease-out;
		&::-webkit-scrollbar {
  			width: 0.25em;
		};	
		&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 6px rgba(0, 0, 255, 0.3);
		};	
		&::-webkit-scrollbar-thumb {
			background-color: green;
		};
		`;

function Home(){
	const [open,setOpen]=React.useState(false);	
	const location=useLocation();
	return <Grid>
		<Main>
			<SidenavContainer open={open}>
				<SideNav open={open} setOpen={setOpen} pathname={location.pathname}/>
			</SidenavContainer>
			<SecondaryMain open={open}>
				<NavBar open={open} setOpen={setOpen}/>		 	
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
			</SecondaryMain>
		</Main>	
		
	</Grid>
}

export default Home;