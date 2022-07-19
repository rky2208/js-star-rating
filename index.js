const  displayStar = (starCount,callback)=>{
let active = -1;
const starDivElement =  document.querySelector("#star");
const fragment =  document.createDocumentFragment();

for(let i=1;i<=starCount;i++){
const iElem = document.createElement("i"); 	
  iElem.classList.add("fa-star-o");
  iElem.classList.add("fa");
  iElem.dataset.rating = i;
  fragment.appendChild(iElem);
}

starDivElement.appendChild(fragment);
starDivElement.addEventListener("mouseover",onMouseOver);
starDivElement.addEventListener("mouseleave",onMouseLeave);
starDivElement.addEventListener("click",onClick);


function fillStar(rating){
console.log(rating)
	for (let i = 0; i < starCount; i++) {
      if (i < parseInt(rating)) {
        starDivElement.children[i].classList.add("fa-star");
      } else {
        starDivElement.children[i].classList.remove("fa-star");
      }
    }
}


function onMouseOver(e){
const ratingVal = parseInt(e.target.dataset.rating);
console.log(ratingVal)
    if (!ratingVal) {
      return;
    }
    fillStar(ratingVal);
}

function onMouseLeave(e){
			console.log("L--",active)
         fillStar(active);
}
   
 function onClick(e) {
    active = e.target.dataset.rating;
    fillStar(active);
    callback(active);
  }
}

function getStar(value) {
console.log("V",value)
  document.getElementById('display-star-value').innerHTML = value;
}

displayStar(5,getStar);
