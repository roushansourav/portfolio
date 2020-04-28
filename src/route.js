export default function(pathname=''){
	if(!pathname) return null;
	let route;
	switch(pathname){
		case '/':
		case '/home':
		route=[
				{key:'/home',label:'Home'},
				{key:'/sorting',label:'Sorting'},
				{key:'/datastructure',label:'Data Structure'},
				{key:'/graph',label:'Graph'},
				{key:'/mathematics',label:'Mathematics'},
				{key:'/tools',label:'Tools'},
			];
			break;
		case '/sorting':
			route=[
				{key:'/home',label:'Home'},
				{key:'/bubble',label:'Bubble'},
				{key:'/insertion',label:'Insertion'},
				{key:'/selection',label:'Selection'},
				{key:'/merge',label:'Merge'},
				{key:'/quick',label:'Quick'},
				{key:'/shell',label:'Shell'},
			];
			break;
		case '/datastructure':
			route=[
				{key:'/home',label:'Home'},
				{key:'/array',label:'Array'},
				{key:'/object',label:'Object'},
				{key:'/stack',label:'Stack'},
				{key:'/queue',label:'Queue'},
				{key:'/priortyqueue',label:'Priority Queue'},
				{key:'/circularqueue',label:'Circular Queue'},
			];
			break;
		case '/graph':
			route=[
				{key:'/home',label:'Home'},
				{key:'/list',label:'list'},
				{key:'/matrix',label:'Adjacency Matrix'},
			];
			break;
		case '/tools':
			route=[
				{key:'/home',label:'Home'},
				{key:'/recursion',label:'Recursion'},
				{key:'/swap',label:'Swap'},
				{key:'/maparray',label:'Map Array'},
				{key:'/filterarray',label:'Filter Array'},
				{key:'/merge',label:'Merging of Array'}
			];
			break;
		case '/mathematics':
			route=[
				{key:'/home',label:'Home'},
				{key:'/linearAlgebra',label:'Linear Algebra'},
				{key:'/probability',label:'Probability'},
				{key:'/statistics',label:'Statistics'},
				{key:'/combinatronics',label:'Combinatronics'},
			];
			break;
			default:
				route=[];
				break;
	}
	return route;
}