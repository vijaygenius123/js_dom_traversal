const grandparent  = document.getElementById("grandparent-id");
const parents = document.getElementsByClassName("parent")

function changeColor(element){
    element.style.background = '#333';
}

//changeColor(grandparent)

Array.from(parents).forEach(changeColor)
