const cursor = document.querySelector(".cursor");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
document.addEventListener("mousemove", function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
});
function animateCursor(){
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();
const hoverElements = document.querySelectorAll("a, button, .project_card, .about_stat, .contact_sticker");
hoverElements.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        cursor.classList.add("cursor_active");
    });
    element.addEventListener("mouseleave", function(){
        cursor.classList.remove("cursor_active");
    });
});