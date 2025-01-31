let cartCount = 0;
let cartItems = [];

function product(productName){

    cartItems.push(productName);
    cartCount++;

    document.getElementById("counter").textContent = cartCount;

    updateCartDropdown();
}

function updateCartDropdown(){

    const cartDropdown = document.getElementById("cart-dropdown");

    if(cartItems.length === 0){
        cartDropdown.innerHTML = "<p> Your cart is empty </p>";
    } else {
        cartDropdown.innerHTML = "<ul>" + cartItems.map(item =>`<li style="list-style-type:none;">${item}</li>`).join("") + "</ul>";
    }

}

function cart(){
    const cartDropdown = document.getElementById("cart-dropdown");
    cartDropdown.classList.toggle("show");
}