let count = 0 
let incrementBtn = document.getElementById("count-el");


function increment(){
    incrementBtn.textContent = count += 1;
}


function save(){
    document.getElementById("save-el").textContent += count + " - "; 
}    

console.log();

