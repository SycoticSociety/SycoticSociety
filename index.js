// change text opacity
const title = document.getElementById("title")
title.style.opacity = 1;

function changeOpacity(){
    if(title.style.opacity <= 0){
        title.style.opacity = 1;
    } else{
        title.style.opacity -= 0.001;
    }
    }
setInterval(changeOpacity, 5);
//change logo opacity and visiblity
const Logo = document.getElementById("logo")
const BuyNow = document.getElementById("buy-now")
const Chart = document.getElementById("chart")
BuyNow.onmouseover = function(){
    Logo.style.visibility = "visible";
}
Chart.onmouseover = function(){
    Logo.style.visibility = "visible";
    Logo.style.transform = "scaleX(-1)";
}
BuyNow.onmouseout = function(){
    Logo.style.visibility = "hidden";
}
Chart.onmouseout = function(){
    Logo.style.visibility = "hidden";
    Logo.style.transform = "scaleX(1)";
}

function logoOpacity() {
    if(Logo.style.opacity <= 0){
        Logo.style.opacity = 1;
    } else{
         Logo.style.opacity -= 0.001;
     }
}
setInterval(logoOpacity, 5);

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

 document.getElementById('connectButton', connect);

function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
}


const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector('.thumbnails').innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
  )
  .join('');

document.querySelectorAll('.thumbnails img').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => scrollThumb());

scrollThumb();
