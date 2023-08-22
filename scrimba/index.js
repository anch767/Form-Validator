// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function alertPurchase(){
    let alertText = "Something went wrong, please try again"
    document.getElementById("error").textContent = "Something went wrong, please try again"
    return alertText;        
}
