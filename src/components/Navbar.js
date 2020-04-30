import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const Drawer=styled.div`
display: flex;
height:50px;
padding: 0.5rem 0rem;
align-items: center;

`;

export default function NavBar({routeIndex=[],setOpen,open}){
	return <Drawer>
			{!open && <MenuIcon style={{fontSize:'40px',color:'#008b00',padding:'0 1rem'}} onClick={()=>setOpen(true)}/>}
		</Drawer>
		;
}