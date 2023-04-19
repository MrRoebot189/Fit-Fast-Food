// Theme selector function

 // Declare variables
 var prev = document.getElementById("prev");
 var next = document.getElementById("next");
 var thumbnail = document.getElementsByClassName("thumbnail");
 var theme = document.getElementById("theme");
 // Create array to store the themes in
 var backgroundImg = new Array(
   "theme/bg1.jpg",
   "theme/bg2.jpg",
   "theme/bg3.jpg",
   "theme/bg4.jpg",
   "theme/bg5.jpg",
 );
 // Two statements to go through the array when the arrows are clicked to change the background
 let i = 0;
 next.onclick = function(){
   // If statement stops program exceeding the last entry in the array
   if(i < 4){
   theme.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
   // Match selected thumbnail to new background
   thumbnail[i + 1].classList.add("active");
   // Remove the previous active thumbnail from list
   thumbnail[i].classList.remove("active");
   i++
   }
 }
 prev.onclick = function(){
   if(i > 0){
   theme.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
   thumbnail[i - 1].classList.add("active");
   thumbnail[i].classList.remove("active");
   i--
   }
 }
// End theme selector function

// Recipe toggle function
 const recipes = document.querySelectorAll('.recipe');
        
  recipes.forEach(recipe => {
    const title = recipe.querySelector('h2');
    const content = recipe.querySelector('p');
    title.addEventListener('click', () => {
      recipes.forEach(recipe => {
        if (recipe !== title.parentNode) {
          recipe.classList.remove('active');
        }
      });
    title.parentNode.classList.toggle('active');
    });
  });
// End recipe toggle function