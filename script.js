// Your Amazon Partner Link
const amazonPartnerLink = "https://www.amazon.com/dp/PRODUCT_ID?tag=YOUR_PARTNER_ID";

// List of Example Deals (You can add as many products as you like)
const deals = [
  {
    title: "Coach Signature Tote",
    description: "Coach Signature Canvas Tote Bag - Perfect for everyday use!",
    imageUrl: "https://example.com/coach-tote.jpg",
    link: "https://www.amazon.com/dp/B08XYZ?tag=YOUR_PARTNER_ID",
  },
  {
    title: "Apple AirPods Pro",
    description: "Get the best sound experience with Apple AirPods Pro.",
    imageUrl: "https://example.com/airpods.jpg",
    link: "https://www.amazon.com/dp/B08XYZZ?tag=YOUR_PARTNER_ID",
  },
  {
    title: "Kindle Paperwhite",
    description: "The perfect device for book lovers with a built-in light.",
    imageUrl: "https://example.com/kindle.jpg",
    link: "https://www.amazon.com/dp/B07XYZZ?tag=hailey626-20",
  },
];

// Function to display the deals
function displayDeals() {
  const dealsContainer = document.getElementById("deals-container");
  deals.forEach(deal => {
    const dealItem = document.createElement("div");
    dealItem.className = "deal-item";

    dealItem.innerHTML = `
      <img src="${deal.imageUrl}" alt="${deal.title}">
      <h3>${deal.title}</h3>
      <p>${deal.description}</p>
      <a href="${deal.link}" target="_blank">Check Deal</a>
    `;
    
    dealsContainer.appendChild(dealItem);
  });
}

// Initialize the page with deals
displayDeals();
