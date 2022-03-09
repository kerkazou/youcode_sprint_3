//  menusidebar
function menusidebar(){
   var menusidebar = document.getElementById("menusidebar");
   var type_calc = document.getElementById("type_calc");
   if(menusidebar.style.transform){
      menusidebar.style.removeProperty('transform');
      sidebar.style.removeProperty('width');
      type_calc.style.removeProperty('display');
   }else{
      menusidebar.setAttribute("style" , "transform: rotate(180deg); transition: 1s ease;");
      sidebar.setAttribute("style" , "width: 0px; transition: 1s ease;");
      type_calc.setAttribute("style" , "display: none !important; transition: 1s ease;");
   }
}

//  dark_light
function dark(){
   var transform = document.getElementById("dark");
   var color_theme = document.getElementById("color_theme");
   var dark = document.getElementById("dark");
   if (transform.style.transform) {
      dark.style.removeProperty('transform');
      color_theme.setAttribute("style" , "--dark1: #313552; --dark2: #1f233d; --dark_text: #ffffff; --shadow: #252a46; transition: 1s ease;");
   }else{
      dark.setAttribute("style" , "transform: translateX(100%); transition: 0.4s ease;");
      color_theme.setAttribute("style" , "--dark1: #E4E9F7; --dark2: #FFF; --dark_text: #707070; --shadow: #D8D2CB; transition: 1s ease;");
   }
}

// historique
function sup_historique() {
   hoperation.value = "";
   hresult.value = "";
}

// calculatrice
function btmCl(){
   result.value = "";
}

function btm(val) {
   result.value += val;
   // document.getElementById("hoperation").innerHTML = "<h3>" + result.value + "<h3>";
}

function operation(operation) {
   result.value += operation;
   // document.getElementById("hoperation").innerHTML = "<h3>" + result.value + "<h3>";
}

function btmFloat() {
   result.value += ".";
}

function btmEgal() {
   document.getElementById("hoperation").innerHTML += "<h3>" + result.value + "<h3>";
   var egal = eval(result.value);
   result.value = egal;
   document.getElementById("hresult").innerHTML += "<h3>" + "=" +  result.value + "<h3>";
}


// test
// var res = "1+2";
// var op = res.search(/1/);
// window.test.innerHTML = op;

// var result = window.result.value;
// var patt = /dark/;
// var x = patt.result(result);
// if(x){
//    window.h.innerHTML = "true"
// }else{
//    window.h.innerHTML = "false"
// }