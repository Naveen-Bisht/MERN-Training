window.addEventListener('load',eventBind);
function eventBind(){
    document.querySelector('#sub').addEventListener('click',submit);
    document.querySelector('#res').addEventListener('click',clearAll);
    document.querySelector('#lname').addEventListener('keyup',enterNext);
}

function enterNext(event){
    console.log('event is');
    let keyascii=event.keyCode;
    console.log(keyascii);
    if(keyascii==13){
        submit();
    }
}

function initCap(name){
    return name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
}

function submit(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var msg="Welcome "+initCap(fname)+" "+initCap(lname);
    console.log(msg);
    document.getElementById("result").style="display:block";
    document.getElementById("result").innerHTML="<i>"+msg+"</i>";
} 

function clearAll(){
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
}