// Store the wallet amount to your local storage with key "amount"
var h1 = document.getElementById("wallet")
var tot=0;
var wallet = JSON.parse(localStorage.getItem("amount")) || [];
function addtoWallet(){
    var am = document.getElementById("amount").value
    tot=Number(tot)+Number(am);
    h1.innerText=tot;
    var amo = {
        amon:tot
    }
    wallet.push(amo);
    localStorage.setItem("amount",JSON.stringify(wallet))
}
