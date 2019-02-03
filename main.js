// Initial Ratings
const ratings = {
    sony: 0,
    samsung: 0,
    vizio: 0,
    panasonic: 0,
    phillips: 0
}

// Define Total Stars
const starsTotal = 5;

// Run getRating when DOM Loads
document.addEventListener('DOMContentLoaded', getRatings());

// Form Element 
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Initial Product Element
let product;

// Product Select Change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    
    // Enable rating control
    ratingControl.disabled = false;
    
    // enable rating control value
    ratingControl.value = ratings[product];
});

// Rating Control Change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // make sure the rating rate is 1 - 5
    if (rating > 5 || rating < 1) {
        alert('Please Rate 1 to 5');
        return;
    }

    // change Rating
    ratings[product] = rating;

    getRatings();
});


// Get Ratings function
function getRatings() {

// loop through the rating object
 for (const rating in ratings) {
   
    // Get Percentage Value from ratings object
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round the percentage to the nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add Number Rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
 }
};