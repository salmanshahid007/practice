
function myAdd() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  let y= document.getElementById("numb2").value;
  
  let z= parseInt(x)+parseInt(y);
  // If x is Not a Number or less than one or greater than 10
  
  document.getElementById("demo").innerHTML = z;
}

function mySub(){

  // Get the value of the input field with id="numb"
  let a = document.getElementById("numb").value;
  let b= document.getElementById("numb2").value;
  
  let sub= parseInt(a)-parseInt(b);
  // If x is Not a Number or less than one or greater than 10
  
  document.getElementById("demo").innerHTML = sub;


}

