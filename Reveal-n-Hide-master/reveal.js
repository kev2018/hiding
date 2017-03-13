function toggle(button){
    let articles = document.getElementsByTagName("article");
    let selected = articles[button-1];
    /*if(selected.style.display === "none"){
        reveal(selected);
        console.log("reveal "+button);
    }*/
    if(selected.style.z === 1){
        reveal(selected);
        console.log("reveal "+button);
    }
    else{
        hide(selected);
        console.log("hide "+button);
    }

}

/*function reveal(art){
    art.style.display = "block";
}

function hide(art){
    art.style.display = "none";
}*/
function reveal(art){
    art.style.z = 0;
}

function hide(art){
    art.style.z = 1;
