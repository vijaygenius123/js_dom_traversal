//const grandparent  = document.getElementById("grandparent-id");
//const grandparent = document.querySelector("#grandparent-id")
//const parents = document.getElementsByClassName("parent")
//const children = document.querySelectorAll(".child");
//const chileOne = document.querySelector("#child-one");
//const parent = chileOne.closest(".grandparent");

function changeColor(element){
    element.style.background = '#333';
}

//changeColor(grandparent)
//Array.from(children).forEach(changeColor);
//Array.from(parents).forEach(changeColor)
//changeColor(parent)

function addEventListener(element) {
    element.addEventListener('click', (e) => {
        console.log('Clicked')
        changeColor(e.target)
    });
}

document.querySelectorAll("div").forEach(addEventListener)
