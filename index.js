//const grandparent  = document.getElementById("grandparent-id");
//const grandparent = document.querySelector("#grandparent-id")
//const parents = document.getElementsByClassName("parent")
//const children = document.querySelectorAll(".child");
const chileOne = document.querySelector("#child-one");
const parent = chileOne.parentElement;
function changeColor(element){
    element.style.background = '#333';
}

//changeColor(grandparent)
//Array.from(children).forEach(changeColor);
//Array.from(parents).forEach(changeColor)
changeColor(parent)
