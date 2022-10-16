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

//MetaMask wallet connect Test


document.getElementById('** Connect Button **', connect);

function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
}
