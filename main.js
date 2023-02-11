const leftSign = document.querySelector("#left_sign");
const rightSign = document.querySelector("#right_sign");
const menuDolci = document.querySelector("#menu_dolci");

const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");

// Event Listner

leftSign.addEventListener("click", goPrevPage);
rightSign.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function goNextPage() {
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                page1.classList.add("flipped");
                break;
            case 2:
                page2.classList.add("flipped");
                break;
            default:
                Error ("unknown state"); 
        }
        currentLocation++;
    }

}

function goPrevPage(){

}
