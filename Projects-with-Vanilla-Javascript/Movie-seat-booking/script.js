const container = document.querySelector('.container');
const seats =  document.querySelectorAll('.row .seat:not(.occupied)'); 
const total =  document.getElementById('total');
const movieSelect =  document.getElementById('movie'); 
const count =  document.getElementById('count'); 

let ticketPrice = +movieSelect.value; 

populateUI();

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('seatSelected'));

  console.log('saved seats from local storage', selectedSeats);

  (selectedSeats !== null && selectedSeats.length > 0) ? 
  seats.forEach((seat, i) => (selectedSeats.indexOf(i) > -1) ? seat.classList.add('selected') : null) : null;
}

function updateCount(count1, count2){  // <---- what this function does is, it saves all selected/de-selected elements everytime it is called. 
  const seatSelected =  document.querySelectorAll('.row .seat.selected');   
  const seatsSelectedCount = seatSelected.length; 

  count1.innerText = seatsSelectedCount;
  count2.innerText = seatsSelectedCount * ticketPrice; 

  const seatIndex = [...seatSelected].map(x => [...seats].indexOf(x))
  localStorage.setItem('seatSelected', JSON.stringify(seatIndex))
  
}


// save the selected movie index and corresponding price
function movieData (index, price) {
  localStorage.setItem('movieIndex', index )
  localStorage.setItem('moviePrice', price )
}

// Get the value of the selected movie whenever a selection is made.
movieSelect.addEventListener('change', e => {
  let moviePrice = e.target.value;

  ticketPrice = moviePrice;
  
  updateCount(count, total)
  movieData(e.target.selectedIndex, e.target.value)

})



// When seat is clicked/selected it should change to the class selected and should change the color.
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

    e.target.classList.toggle("selected");
    // to display the number of seats selected and the total cost of ticket.
    updateCount(count, total)
  };
  
})

updateCount(count, total)

// todo: add; random seats generator | seat number view | promo for bulk seat purchase | reserve a seat for a percentage fee and for how long 


// How to count all user selected element?  