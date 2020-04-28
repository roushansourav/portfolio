import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function NavBar({routeIndex=[]}){
	return (<Grid container justify='space-around' style={{margin:'2rem 0',padding:'0.5rem'}}>
		{routeIndex.map(({key,label})=>
			<Link key={key} to={key}>{label}</Link>
		)}
	</Grid>);
}