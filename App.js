
  
  document.addEventListener('DOMContentLoaded', function() {

    function toggleMenu() {
      var links = document.getElementById('links');
      links.classList.toggle('show');
    }


    // Custom JavaScript

// Get all food items
var foodItems = document.querySelectorAll('.FoodItems .FItems .FIButton .customB');

// Set initial index for pagination
var currentIndex = 0;

function prev() {
  console.log("Previous button clicked");
  currentIndex -= 4;
  console.log("Current index after previous:", currentIndex);
  showItems();
}

// Function to show next 4 food items
function next() {
  console.log("Next button clicked");
  currentIndex += 4;
  console.log("Current index after next:", currentIndex);
  showItems();
}

// Function to show the current set of food items
function showItems() {
  console.log("Showing items from index:", currentIndex);
  // Hide all food items
  foodItems.forEach(function(item) {
    item.style.display = 'none';
  });

  // Show the next 4 food items
  for (var i = currentIndex; i < currentIndex + 4 && i < foodItems.length; i++) {
    foodItems[i].style.display = 'block';
  }
}
for(var i=4; i < foodItems.length; i++){
  foodItems[i].style.display ='none';
}

// Show the initial set of food items
showItems();
// // Get the house and user icons
// const houseIcon = document.querySelector('.bi-house');
// const userIcon = document.querySelector('.bi-person');

// // Add event listener for clicking on the house icon
// houseIcon.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     window.location.href = 'home.html'; // Redirect to home page
// });

// // Add event listener for clicking on the user icon
// userIcon.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     window.location.href = 'signup.html'; // Redirect to signup page
// });




// // SEARCH
//     // Get the search input and search icon
// const searchinput = document.getElementById('searchinput');
// const searchIcon = document.getElementById('searchicon');

// // Add event listener for pressing Enter in the search input
// searchinput.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     search();
//   }
// });

// // Add event listener for clicking the search icon
// searchicon.addEventListener('click', search);

// // Function to perform the search
// function search() {
//   const searchTerm = searchinput.value;
//   // Construct the search URL based on the search term
//   const searchURL = 'https://example.com/search?q=${encodeURIComponent(searchTerm)}';
//   // Open the search URL in a new tab
//   window.open(searchURL, '_blank');
// }




// Get the Visit Now button
const visitMB = document.getElementById('visitMB');

// Add event listener for clicking on the Visit Now button
visitMB.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior
    window.location.href = 'Menu.html'; // Redirect to menu page
});



 // Get the Sign In link
 const signInLink = document.getElementById('signInLink');

 // Add event listener for clicking on the Sign In link
 signInLink.addEventListener('click', function(event) {
     event.preventDefault(); // Prevent default link behavior
     window.location.href = 'Signin.html'; // Redirect to sign in page
 });




// Get the booking link element by its ID
var bookingLink = document.getElementById("b-l");

// Add a click event listener to the booking link
bookingLink.addEventListener("click", function(event) {
    // Prevent the default action of the link (e.g., navigating to a new page)
    event.preventDefault();

    // Call the function to toggle the reservation form
    toggleReservationForm();
});

// Function to toggle visibility of reservation form
function toggleReservationForm() {
    var signUpForm = document.getElementById("su-l");
    var reservationForm = document.getElementById("b-l");

    signUpForm.style.display = "none";
    reservationForm.style.display = "block";
}




// SIGN UP FORM

// Get the sign-up link element by its ID
var signUpLink = document.getElementById("su-l");
// Add a click event listener to the sign-up link
signUpLink.addEventListener("click", function(event) {
// Prevent the default action of the link (e.g., navigating to a new page)
event.preventDefault();
 // Call the function to toggle the sign-up form
    toggleSignUpForm();
});

// Function to toggle visibility of sign-up form
function toggleSignUpForm() {
    var signUpForm = document.getElementById("su-l");
    var reservationForm = document.getElementById("b-l");

    signUpForm.style.display = "block";
    reservationForm.style.display = "none";
}

});
