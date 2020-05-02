import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styled from 'styled-components';

const Arrow=styled(ArrowForwardIosIcon)`
    transform:${props=>props.rotate?'rotateZ(90deg)':''};
    transition: transform 0.2s ease-out;
`;
const SLink = styled(Link)`
	text-decoration:none;
    width:100%;    
	color:${props=>props.active?'#fff':'#4caf50'};
    padding:0.25rem 0.8rem;

`;
const LinkContainer = styled.div`
	text-align:left;
	padding:0.25rem 1.25rem;
	font-weight:500;
    width:100%;
    background-color:${props=>props.active?'#4caf50':'#fff'};
`;
const NormalLink=styled.div`
    text-decoration:none;
	cursor:pointer;
	color:${props=>props.active?'#fff':'#4caf50'};
    padding:0.25rem 0.8rem;
    color:${props=>props.color};
`;
const SubLink=styled.div`
    transition:height 0.2s ease-out;
`;

export default function Links ({links,pathname}) {
    const [status,setStatus]=useState('/home');
    if (Array.isArray(links)){
        return links.map(({key,label,items})=>{
            return <LinkContainer key={key} active={Boolean(pathname===key)}>
                        {!Array.isArray(items) ? <SLink to={key} active={Boolean(pathname===key)}>{label}</SLink> : <NormalLink active={Boolean(pathname===key)} onClick={()=>{if(status!==key)setStatus(key);else setStatus('/home')}}><Arrow rotate={key===status}/>{label}</NormalLink>}
                        <SubLink>
                        {(status.split('/')[1]===key.split('/')[1]) && Array.isArray(items) && <Links {...{links:items,pathname}}/> }
                        </SubLink>
                    </LinkContainer>
        })
                    
    }
    else
        return null;
}