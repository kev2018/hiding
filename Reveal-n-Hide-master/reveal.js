/*function toggle(button){
    let articles = document.getElementsByTagName("article");
    let div = document.getElementsByClassName("grey");
    let selected2 = div[button-1];
    let selected = articles[button-1];
    if(selected.style.display === "none"){
        reveal(selected);
        console.log("reveal "+button);
    }
    if(selected.style.zIndex === "1"){
        reveal(selected2);
        console.log("reveal "+button);
    }
    else{
        hide(selected2);
        console.log("hide "+button);
    }

}

function reveal(art){
    art.style.display = "block";
}

function hide(art){
    art.style.display = "none";
}
function reveal(div){
    div.style.zIndex = "0";
}

function hide(div){
    div.style.zIndex = "1";
*/
function toggle(){
  if(document.getElementsByClassName("grey").style.zIndex == "1"){
   document.getElementsByClassName("grey").style.zIndex = "-1";
   }
   else{
    document.getElementsByClassName("grey").style.zIndex = "1";
   }
}
