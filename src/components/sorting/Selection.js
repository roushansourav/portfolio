import React,{useState} from 'react';
import {Grid,Paper,Input,Button} from '@material-ui/core';
import {useLocation} from 'react-router-dom';

function Swap(arr,i,j){
	let k=arr[i];
	arr[i]=arr[j];
	arr[j]=k;
}

export default function(){
	const location=useLocation();
	console.log(location.pathname)
	const [data,setData]=useState('');
	const [output,setOutput]=useState('');
	const [iter,setIter]=useState(null);
	function hSort(str){
		if(!str) {setOutput('Enter some data'); return}
		let arrData=str.split(',').map(n=>parseInt(n,10));
		arrData=SelectionSort(arrData);
		setOutput(arrData.map(n=>n.toString()).join(', '))
	}
	function SelectionSort(arr){
	for(let i=0;i<arr.length-1;i++){
		let min_idx=i;
		for(let j=i+1;j<arr.length;j++){
			if(arr[min_idx]>arr[j]) min_idx=j;
		}
		Swap(arr,i,min_idx);
	}
	return arr;
}
	return (<Grid>
		{<h1>Selection Sort</h1>}
		<Paper style={{padding:'2rem'}}>
			<Grid container justify='center'>
				<Grid item xs={12} style={{textAlign:'center'}}>
				<Input style={{width:'20rem'}} placeholder='Enter comma separated value' value={data} onChange={(e)=>setData(e.target.value)}/>
				<Button variant="outlined" style={{color:'green'}} onClick={(e)=>{hSort(data)}} size='small'>Sort</Button>
				</Grid>
				<Grid item xs={12} style={{textAlign:'center'}}>
				<Input style={{width:'20rem'}} placeholder='Output' value={output} readOnly/>
				</Grid>
			</Grid>
		</Paper>
	</Grid>);
}