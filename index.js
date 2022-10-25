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


// MetaMask Event start Squence
document.getElementById('connect-button').addEventListener('click', event => {
  let account;
  ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
    account = accounts[0];
    console.log(account);

  });
});

