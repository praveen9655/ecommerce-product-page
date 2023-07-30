let cartItems = document.querySelector('.cart_item');
let BigShow = document.querySelector('.BigP');
let lishow = document.querySelector('.lishow');
let CMt = document.querySelector('.CMt');
let addCartBtn = document.getElementById('addCartBtn');
let noItems = document.getElementById('noItems');
let deleTe = document.getElementById('deleTe');
let numCart = 0;

function toggleDisplay(element, show) {
    element.style.display = show ? 'block' : 'none';
}

function cartIc() {
    toggleDisplay(cartItems, cartItems.style.display === 'none');
}

function bigP(on) {
    toggleDisplay(BigShow, on !== 0);
}

function cartAdd(on) {
    toggleDisplay(lishow, on !== 0);
    toggleDisplay(CMt, on === 0);
}

function itemsAdd(num) {
    if (num === 0 && numCart > 0) {
        numCart -= 1;
    } else if (num === 1) {
        numCart += 1;
    }

    deleTe.addEventListener('click', () => {
        numCart = 0;
        updateDisplay();
    });

    updateDisplay();
}

function updateDisplay() {
    noItems.innerHTML = numCart;
    document.getElementById('noItemsDis').innerHTML = numCart;
    document.getElementById('totalitem').innerHTML = numCart;
    document.getElementById('toTal').innerHTML = '$' + numCart * 125;
}
const imageUrls = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
let currentIndex = 0; 
function imgUpdte(num) {
  if (num >= 0 && num < 4) {
    document.getElementById('imgMain').src = imageUrls[num];
    document.getElementById('imgMain1').src = imageUrls[num];
    currentIndex = num; 
  } else if (num === 5) {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    document.getElementById('imgMain').src = imageUrls[currentIndex];
    document.getElementById('imgMain1').src = imageUrls[currentIndex];
  } else if (num === 6) {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    document.getElementById('imgMain').src = imageUrls[currentIndex];
    document.getElementById('imgMain1').src = imageUrls[currentIndex];
  }
}



