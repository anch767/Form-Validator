    const mainDiv =  document.querySelector('.main-div');
    const btns =  document.querySelector('.buttons');
    const btn = document.querySelector('.btn')

    const textarea1 =  document.getElementById('textarea1'); 
    const textarea2 =  document.getElementById('textarea2'); 
    const logAcceptable =  document.querySelector('.log-acceptable');
    const logUnacceptable =  document.querySelector('.log-unacceptable'); 
    let ariaLabel = logAcceptable.getAttribute('aria-label');

    let arr = [];
    let result = ''

    // in order not to include the already clicked option, you need to set up additional class to that target element and add a condition that excludes the selected element
    mainDiv.addEventListener('click', (e) => {
      

      if (e.target.classList.contains('btn') ) {
        e.target.classList.toggle('selected');  
       

        // Check if the 'selected' class is present before adding to the array
        if (e.target.classList.contains('selected')){
          arr.push(e.target.getAttribute('aria-label')); 
          //arr.push(e.target.innerText);   // <---- Add the newly selected element to the array
        } else {
          // arr = arr.filter(element => element !== e.target.innerText);  
          arr = arr.filter(el => el !== e.target.getAttribute('aria-label')); 
      }
    }

    logAcceptable.addEventListener('click', () => {
      logAcceptable.style.display = "none";
      console.log("logAcceptable");
      logUnacceptable.style.display = "flex";
      result = ' - unacceptable'
    })
    logUnacceptable.addEventListener('click', () => {
      logUnacceptable.style.display = "none";
      console.log("logAcceptable");
      logAcceptable.style.display = "flex";
      result = ' - acceptable'
    }) 



    
      let arrString = arr.length > 1 ? arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1] : arr.join(''); // <--- the condition (ternary operator ?) helps to make sure that if only 1 array is selected it will not add "and".
      textarea2.textContent = arrString + result;
       
      //window.open('https://example.com', '_blank', 'location=no');
    })
    
