 async function getRecipes(){
 const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
 const data=await response.json();

const count=data.count;
const recipes=data.recipes;
const result=recipes.map(function(ele){
return `
<div class="recipe" >
<h2>${ele.title}</h2>
<img  alt="pizza" src="${ele.image_url}"/>
</div>
`
}).join(' ');
document.querySelector(".count").innerHTML+=count;
document.querySelector(".recipes").innerHTML+=result;
}
getRecipes();