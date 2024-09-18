var btc = document.getElementsByClassName("bitcoin")[0];
var eth = document.getElementsByClassName("ethereum")[0];
var doge = document.getElementsByClassName("dogecoin")[0];


var settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method" : "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
})

