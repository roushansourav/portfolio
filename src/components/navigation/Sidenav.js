import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import links from '../navigation/index';
import LinkComponent from '../../utils/routeLinker';

const SideNavContainer=styled.div`
	height: 100%;
  	background-color: #fff;
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
	font-size:30px;
	cursor:pointer;
	color:#008b00;
	padding-right:2rem;

`;
const Links=function({pathname,links}){
	return <LinkComponent{...{links,pathname}}/>;
};
const SideNav=function({open,setOpen,pathname}){
	console.log(pathname)
	return (
	<SideNavContainer open={open}>
		<div style={{display:'flex',justifyContent:'flex-end'}}>
			<DrawerIcon onClick={()=>setOpen(!open)}><ArrowBackIcon/></DrawerIcon>
		</div>
		<Links {...{links,pathname}}/>
		{/* {links.map(({key,label,items})=>{
			return <LinkContainer key={key} >
			{!Array.isArray(items)?<SLink to={key}>{label}</SLink>:label}
			{Array.isArray(items)?items.map(({key,label})=><LinkContainer key={label} >
			<SLink to={key}>{label}</SLink></LinkContainer>):null}
			</LinkContainer>}
			)} */}
	</SideNavContainer>)
}

export default SideNav;