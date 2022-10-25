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
document.getElementById('connectButton', connect).addEventListener('click', event => {
  let account;
  
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

/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from '@metamask/detect-provider';

// this returns the provider, or null if it wasn't detected
const provider = await detectEthereumProvider();

if (provider) {
  startApp(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider is not the same as
  // window.ethereum, something is overwriting it, perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
}    
