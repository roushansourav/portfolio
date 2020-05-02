import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const Drawer=styled.div`
display: flex;
width:100%;
height:50px;
padding: 0.5rem 0rem;
align-items: center;

`;

export default function NavBar({routeIndex=[],setOpen,open}){
	return <Drawer>
			 {!open && <MenuIcon style={{fontSize:'40px',color:'#008b00',padding:'0 1rem'}} onClick={()=>setOpen(!open)}/>}
				<div style={{color:'green'}}>
					Roushan Sourav
				</div>
		</Drawer>
		;
}