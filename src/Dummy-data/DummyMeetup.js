const DUMMY_MEETUPS= [{
    id: Math.ceil(Math.random() * 1000),
    title: " First meetup", 
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg" , 
    description: "Palace of Westminster from the dome on Methodist Central Hal",
    location: "London, United Kingdom" 
}, 
{   id: Math.ceil(Math.random() * 1000),
    title: "Second meetup", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg" , 
    description: "Christ the Redeemer on Corcovado and Sugarloaf Mountain and Botafogo Bay (background)" , 
    location: "Rio de Janeiro, Brasil"
}, 
{ id: Math.ceil(Math.random() * 1000),
    title: "Third meetup", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/1920px-Prague_%286365119737%29.jpg" , 
    description: "Prague - Capital of the Czech Republic", 
    location: "Prague, Czech Republic"
},
{ id: Math.ceil(Math.random() * 1000),
    title: "Forth meetup" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg",
    description: "Amsterdam,the Netherlands at dusk", 
    location: "Amsterdam, Netherlands"
}
];

export default DUMMY_MEETUPS; 