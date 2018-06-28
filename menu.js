///Order Page JS//
// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closex")[0];
var span2 = document.getElementsByClassName("closex")[1]

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks the button, open (Assortments) modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks on <span> (x), close the (Assortments) modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2){
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}


//Assortments Model Button Selection Triggers
var sigbutton = document.getElementsByClassName("sig")[0];
var seabutton = document.getElementsByClassName("sea")[0];
var ranbutton = document.getElementsByClassName("ran")[0];
var clasbutton = document.getElementsByClassName("clas")[0];
var sig = document.getElementsByClassName("ast-sel-sig")[0];
var sea = document.getElementsByClassName("ast-sel-sea")[0];
var ran = document.getElementsByClassName("ast-sel-ran")[0];
var clas = document.getElementsByClassName("ast-sel-clas")[0];
var modalContent = document.getElementsByClassName("modal-content")[1];

//Stop the jumping. It changes the height for each button click, to avoid jumping to the top.
window.addEventListener("click", function(event){
  if(event.target.className == "sig" || event.target.className == "sea" || event.target.className == "ran" || event.target.className == "clas"){
    modalContent.style.height = "62vh";
  }
  else{
    modalContent.style.height = "62vh";
  }
});
//Signature Button Trigger

window.addEventListener("click", function(event){
  if(event.target == sigbutton){
    event.preventDefault();
    $(sig).slideDown(1000);

    sig.style.display = "flex";
    sigbutton.style.backgroundColor = "#7a4834";
    sigbutton.style.color = "white";
    event.preventDefault();
    }
    if(event.target == modal || event.target == modal2){
      modal.style.display = "none";
      modal2.style.display = "none";
      sig.style.display = "none";
      event.preventDefault();

    }
    if(event.target.className == "sea" || event.target.className == "ran" || event.target.className == "clas"){
    sig.style.display = "none";
    sigbutton.style.backgroundColor = "white";
    sigbutton.style.color = "black";
    event.preventDefault();
  }
});
//Seasonal Button Trigger
window.addEventListener("click", function(event){
  if(event.target == seabutton){
      event.preventDefault();
      $(sea).slideDown(1000);
      sea.style.display = "flex";
      seabutton.style.backgroundColor = "#7a4834";
      seabutton.style.color = "white";

    }
    if(event.target == modal || event.target == modal2){
      modal.style.display = "none";
      modal2.style.display = "none";
      sea.style.display = "none";
      event.preventDefault();

    }
    if(event.target.className == "sig" || event.target.className == "ran" || event.target.className == "clas"){
    sea.style.display = "none";
    seabutton.style.backgroundColor = "white";
    seabutton.style.color = "black";
    event.preventDefault();

    }
});
//Random Button Trigger
window.addEventListener("click", function(event){
  if(event.target == ranbutton){
      event.preventDefault();
      $(ran).slideDown(1000);
      ran.style.display = "flex";
      ranbutton.style.backgroundColor = "#7a4834";
      ranbutton.style.color = "white";
      event.preventDefault();

    }
    if(event.target == modal || event.target == modal2){
      modal.style.display = "none";
      modal2.style.display = "none";
      ran.style.display = "none";
      event.preventDefault();  modalContent.style.height = "160vh";


    }
    if(event.target.className == "sig" || event.target.className == "sea" || event.target.className == "clas"){
    ran.style.display = "none";
    ranbutton.style.backgroundColor = "white";
    ranbutton.style.color = "black";
    event.preventDefault();

    }
});
// Classic Button Trigger
window.addEventListener("click", function(event){
  if(event.target == clasbutton){
      event.preventDefault();
      $(clas).slideDown(1000);
      clas.style.display = "flex";
      clasbutton.style.backgroundColor = "#7a4834";
      clasbutton.style.color = "white";
      event.preventDefault();


    }
    if(event.target == modal || event.target == modal2){
      modal.style.display = "none";
      modal2.style.display = "none";
      clas.style.display = "none";
      event.preventDefault();
    }
    if(event.target.className == "sig" || event.target.className == "sea" || event.target.className == "ran"){
    clas.style.display = "none";
    clasbutton.style.backgroundColor = "white";
    clasbutton.style.color = "black";
    event.preventDefault();

   }
});
var singlechoose0 = document.getElementsByClassName("singlechoosecontainer")[0];
var singlechoose1 = document.getElementsByClassName("singlechoosecontainer")[1];
var singlechoose2 = document.getElementsByClassName("singlechoosecontainer")[2];
var singlechoose3 = document.getElementsByClassName("singlechoosecontainer")[3];

var orderformCont = document.querySelectorAll(" .orderform")[0];

var orderform0 = document.querySelectorAll(" .orderform  input")[0];
var orderform1 = document.querySelectorAll(" .orderform  input")[1];
var orderform2 = document.querySelectorAll(" .orderform  input")[2];
var orderform3 = document.querySelectorAll(" .orderform  input")[3];

function myFunction0(event){
  singlechoose0.style.display ="block";
  singlechoose1.style.display ="none";
  singlechoose2.style.display ="none";
  singlechoose3.style.display ="none";
};
function myFunction1(event){
  singlechoose1.style.display ="block";
  singlechoose0.style.display ="none";
  singlechoose2.style.display ="none";
  singlechoose3.style.display ="none";

};
function myFunction2(event){
  singlechoose2.style.display ="block";
  singlechoose1.style.display ="none";
  singlechoose0.style.display ="none";
  singlechoose3.style.display ="none";

};
function myFunction3(event){
  singlechoose3.style.display ="block";
  singlechoose1.style.display ="none";
  singlechoose2.style.display ="none";
  singlechoose0.style.display ="none";

};

// 2 Dozen Span click reveal
function revealtabs(){
  var orderTabs = document.querySelector(".tabs");
  var orderTabs2 = document.querySelector(".tabs2");
  orderTabs2.classList.toggle("show");
}
