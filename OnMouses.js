function OnMouseOver()
{

    let no = document.getElementById("no");
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;
    no.style.position="relative";
    no.style.left = "0px";
    no.style.top = "0px";
    no.style.left = Math.random() * (maxWidth - 50 - (no.style.left).replace("px", "")) + "px";
    no.style.top = Math.random() * (maxHeight - 70 - (no.style.top).replace("px", "")) + "px";

}
function OnMouseClick()
{
    alert("I LOVE YOU TOO");
}