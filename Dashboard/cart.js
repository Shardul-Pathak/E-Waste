document.addEventListener("DOMContentLoaded", function() {
    const cartList = document.getElementById("cart-list");

    // Sample recyclable items
    const recyclableItems = [
        "Old Laptop",
        "Broken Smartphone",
        "Used Batteries",
        "Damaged Keyboard"
    ];

    // Populate the cart list
    recyclableItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
});
 