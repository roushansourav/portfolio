import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';

const SideNavContainer=styled.div`
	height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
	padding-top: 20px;
`;

const SLink=styled(Link)`
	text-decoration:none;
	color:#008b00;

`;
const LinkContainer=styled.div`

	text-align:left;
	padding:0.25rem 1.25rem;
	font-weight:500;
`;
const DrawerIcon=styled.div`
	position:relative;
	top:0px;
	right:-160px;
	font-size:30px;
	cursor:pointer;
	color:#008b00;
	padding-right:0.25rem;

`;
const SideNav=function({links=[],open,setOpen}){
	return (
	<SideNavContainer>
		<DrawerIcon onClick={()=>setOpen(!open)}>{!open?<MenuIcon/>:<ArrowBackIcon/>}</DrawerIcon>
		{links.map(l=><LinkContainer key={l.key} ><SLink to={l.key}>{l.label}</SLink></LinkContainer>)}
	</SideNavContainer>)
}

export default SideNav;