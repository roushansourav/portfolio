import React from 'react';
import {Grid} from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';

function App(){
	return <Grid>	
		<Router>
			<Home/>
		</Router>
	</Grid>
}

export default App;