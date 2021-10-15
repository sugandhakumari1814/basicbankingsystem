$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
          
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});
var indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
    var i;
    const img = document.querySelectorAll('.image');
    const sliders = document.querySelectorAll('.btm-sliders span');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0 ; i <img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0 ; i <sliders.length; i++){
        sliders[i].style.background = "red";
    }
    img[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "white";
}



let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 7000) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
        document.getElementById("myAccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@email.com.`)

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}