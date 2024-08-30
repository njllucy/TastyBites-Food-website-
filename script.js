var div=document.getElementById('main');
const msg=document.querySelector("#seemore-button");
var display=0;
function hideshow(){
    if(display==1){
        div.style.display='none';
        display=0;
        msg.innerText="See more products";
    }
    else{
        div.style.display='block';
        display=1;
        msg.innerText="See less products";
    }
}
function change_text(){
    document.getElementById("demo").innerHTML="Your subscription is successfull !";
    document.getElementById("demo").style.color="#F48E28";
}