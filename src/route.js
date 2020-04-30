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
				{key:pathname+'/bubble',label:'Bubble'},
				{key:pathname+'/insertion',label:'Insertion'},
				{key:pathname+'/selection',label:'Selection'},
				{key:pathname+'/merge',label:'Merge'},
				{key:pathname+'/quick',label:'Quick'},
				{key:pathname+'/shell',label:'Shell'},
			];
			break;
		case '/datastructure':
			route=[
				{key:'/home',label:'Home'},
				{key:pathname+'/array',label:'Array'},
				{key:pathname+'/object',label:'Object'},
				{key:pathname+'/stack',label:'Stack'},
				{key:pathname+'/queue',label:'Queue'},
				{key:pathname+'/priortyqueue',label:'Priority Queue'},
				{key:pathname+'/circularqueue',label:'Circular Queue'},
			];
			break;
		case '/graph':
			route=[
				{key:'/home',label:'Home'},
				{key:pathname+'/list',label:'list'},
				{key:pathname+'/matrix',label:'Adjacency Matrix'},
			];
			break;
		case '/tools':
			route=[
				{key:'/home',label:'Home'},
				{key:pathname+'/recursion',label:'Recursion'},
				{key:pathname+'/swap',label:'Swap'},
				{key:pathname+'/maparray',label:'Map Array'},
				{key:pathname+'/filterarray',label:'Filter Array'},
				{key:pathname+'/merge',label:'Merging of Array'}
			];
			break;
		case '/mathematics':
			route=[
				{key:'/home',label:'Home'},
				{key:pathname+'/linearAlgebra',label:'Linear Algebra'},
				{key:pathname+'/probability',label:'Probability'},
				{key:pathname+'/statistics',label:'Statistics'},
				{key:pathname+'/combinatronics',label:'Combinatronics'},
			];
			break;
			default:
				route=[];
				break;
	}
	return route;
}