function changecolor(){
    let nav = document.querySelector("nav");
    let ul = document.querySelector("ul"); // Changed getElementsByTagName to querySelector
    let li = document.querySelectorAll("li"); // Changed getElementsByTagName to querySelectorAll to get a collection
    let button = document.querySelector("button");

    nav.style.backgroundColor = "white";
    ul.style.backgroundColor = "white";
    nav.style.color = "black";
    ul.style.color = "black";
    button.style.backgroundColor = "brown";
    button.style.color = "red";

    // Loop through each li element and apply styles
    li.forEach(item => {
        item.style.backgroundColor = "black";
        item.style.color = "white";
    });
}