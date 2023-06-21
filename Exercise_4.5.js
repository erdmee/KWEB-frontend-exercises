const itemPrice = {
    lemon: 900,
    orange: 800,
    apple: 700,
};
let totalPrice = 0;
for (const buttonEl of document.getElementsByClassName('add-to-cart')) {
    buttonEl.addEventListener('click', event => {
        const itemName = event.target.parentNode.parentNode.getAttribute('id');
        totalPrice += itemPrice[itemName];
        document.getElementById('cost').innerText = totalPrice;
}); }
