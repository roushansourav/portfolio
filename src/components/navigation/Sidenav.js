import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';

const SideNavContainer=styled.div`
	height: 100%;
  background-color: #fff;
  overflow-x: hidden;
	padding-top: 20px;
`;

const SLink=styled(Link)`
	text-decoration:none;
	color:#008b00;
	overflow-x:hidden;

`;
const LinkContainer=styled.div`

	text-align:left;
	padding:0.25rem 1.25rem;
	font-weight:500;
	overflow-x:hidden;
`;
const DrawerIcon=styled.div`
	font-size:30px;
	cursor:pointer;
	color:#008b00;
	padding-right:2rem;

`;
const SideNav=function({links=[],open,setOpen}){
	return (
	<SideNavContainer open={open}>
		<div style={{display:'flex',justifyContent:'flex-end'}}>
			<DrawerIcon onClick={()=>setOpen(!open)}><ArrowBackIcon/></DrawerIcon>
		</div>
		
		{links.map(l=><LinkContainer key={l.key} ><SLink to={l.key}>{l.label}</SLink></LinkContainer>)}
	</SideNavContainer>)
}

export default SideNav;