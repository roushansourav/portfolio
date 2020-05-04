import React,{useState} from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import links from '../navigation/index';
import LinkComponent from './routeLinker';

const SideNavContainer=styled.div`
	height: 100%;
  	background-color: #fff;
	padding-top: 20px;
`;
const DrawerIcon=styled.div`
	font-size:30px;
	cursor:pointer;
	color:#008b00;
	padding-right:2rem;

`;

const SideNav=function({open,setOpen,pathname}){
	console.log(pathname)
	const [subLink,setSubLink]=useState('/home');
	return (
	<SideNavContainer open={open}>
		<div style={{display:'flex',justifyContent:'flex-end'}}>
			<DrawerIcon onClick={()=>setOpen(!open)}><ArrowBackIcon/></DrawerIcon>
		</div>
		<LinkComponent {...{links,pathname,status:subLink,setStatus:setSubLink}}/>
	</SideNavContainer>)
}

export default SideNav;