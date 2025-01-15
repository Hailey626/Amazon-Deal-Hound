// Example of JavaScript if you need to add interactivity

// Function to handle category filtering or sorting products
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners for filtering products (if you implement this functionality later)
    const categoryLinks = document.querySelectorAll('#categories ul li a');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // You can add logic to filter the products based on categories here
            alert('Filtering products by category...');
        });
    });
});
