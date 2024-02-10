
document.getElementById("sum").addEventListener("click",
sumCreate

)
document.getElementById("difference").addEventListener("click",
diffCreate

)
document.getElementById("multiply").addEventListener("click",
 mulCreate

)
document.getElementById("divide").addEventListener("click",

divCreate
    

)
function sumCreate(){
    firstvalue=document.getElementById("first-num").value;
    secondvalue=document.getElementById("second-num").value;

     alert(parseInt(firstvalue) + parseInt(secondvalue));
  }
  function diffCreate(){
    firstvalue=document.getElementById("first-num").value;
    secondvalue=document.getElementById("second-num").value;
        
      alert(firstvalue-secondvalue)
 }
 function mulCreate(){
    firstvalue=document.getElementById("first-num").value;
    secondvalue=document.getElementById("second-num").value;
      alert(firstvalue*secondvalue)
  }
 function divCreate(){
    firstvalue=document.getElementById("first-num").value;
    secondvalue=document.getElementById("second-num").value;
     alert(firstvalue/secondvalue);
 }
