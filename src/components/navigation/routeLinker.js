import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styled from 'styled-components';

const Arrow=styled(ArrowForwardIosIcon)`
    font-size: 0.8rem;
    padding-right: 0.25rem;
    transform:${props=>props.rotate?'rotateZ(90deg)':''};
    transition: transform 0.2s ease-out;
`;
const SLink = styled(Link)`
	text-decoration:none;
    width:100%;    
	color:${props=>props.active?'#fff':'#4caf50'};
    padding:0 3.5rem;

`;
const LinkContainer = styled.div`
	text-align:left;
	font-weight:500;
    width:100%;
    background-color:${props=>props.active?'#4caf50':'#fff'};
    padding:0.35rem 0rem;
    margin:0.25rem 0;
`;
const NormalLink=styled.div`
    text-decoration:none;
	cursor:pointer;
	color:${props=>props.active?'#fff':'#4caf50'};
    padding:0 1.75rem;
    color:${props=>props.color};
`;
const SubLink=styled.div`
    transition:height 0.2s ease-out;
`;

export default memo(function Links ({links,pathname,status='/home',setStatus}) {
    console.log(pathname,status)
    if (Array.isArray(links)){
        return links.map(({key,label,items})=>{
            return <LinkContainer key={key} active={Boolean(pathname===key)}>
                        {!Array.isArray(items) && key!=='/home' ? 
                        <SLink to={key} active={Boolean(pathname===key)}>{label}</SLink> : 
                        <NormalLink active={Boolean(pathname===key)} 
                            onClick={()=>{if(status!==key)setStatus(key);else setStatus('/home')}}>
                            {key!=='/home'&&<Arrow rotate={key===status}/>}<span>{label}</span></NormalLink>}
                        <SubLink>
                        {(status.split('/')[1]===key.split('/')[1]) && Array.isArray(items) && <Links {...{links:items,pathname}}/> }
                        </SubLink>
                    </LinkContainer>
        })
                    
    }
    else
        return null;
});