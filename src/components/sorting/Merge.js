import React,{useState} from 'react';
import {Grid,Paper,Input,Button} from '@material-ui/core';


function Swap(arr,i,j){
	let k=arr[i];
	arr[i]=arr[j];
	arr[j]=k;
}

function BubbleSort(arr){
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length-1;j++){
			if(arr[i]>arr[j]) Swap(arr,i,j);
		}
	}
	return arr;
}

export default function(){
	const [data,setData]=useState('');
	const [output,setOutput]=useState('');
	function hSort(str){
		let arrData=str.split(',').map(n=>parseInt(n,10));
		arrData=BubbleSort(arrData);
		setOutput(arrData.map(n=>n.toString().join()))
	}
	return (<Grid container>
		<h1>Bubble Sort</h1>
		<Paper>
			<Grid container>
				<Grid item xs={12}>
				<Input placeholder='Enter comma separated value' value={data} onChange={(e)=>setData(e.target.value)}/>
				<Button variant="outlined" style={{color:'green'}} onClick={(e)=>{hSort(data)}}>Sort</Button>
				</Grid>
				<Grid item xs={12}>
				<Input placeholder='Output' value={output} readOnly/>
				</Grid>
			</Grid>
		</Paper>
	</Grid>);
}