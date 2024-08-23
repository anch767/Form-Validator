// Functionality to make the object trail animation

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span"); 
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);

    // remove the span after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);

    // create different sizes of the object trail
    spanEl.style.width = Math.random() * 100 + "px";
    spanEl.style.height = Math.random() * 100 + "px";

});

