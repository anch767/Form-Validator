const copyCaseJs = document.getElementById("copyCase");

copyCaseJs.addEventListener("click", (event) => {
    const content = document.getElementById("case").textContent;
    navigator.clipboard.writeText(content);
})