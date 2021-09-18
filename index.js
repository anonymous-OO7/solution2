const arr2 = [

	{name:"gaurav",
	value:1
	},
	{
		name:"mohan",
		value:2
	},
	{
		name:"sohan",
		value:3
	},
	{
		name:"rajesh",
		value:4
	},
	{
		name:"ramesh",
		value:5
	}
];


let crele =  document.createElement("select");

arr2.map((element,index) => {
	let temp = document.createElement("option");
	temp.setAttribute("value" , element.value);
	temp.innerHTML = element.name;
	crele.append(temp);
});

console.log(crele);

let dv = document.getElementById("q2");
dv.append(crele);


