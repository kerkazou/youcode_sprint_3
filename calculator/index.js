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
   var hoperation = document.getElementById("hoperation");
   var hresult = document.getElementById("hresult");
   hoperation.innerText = "";
   hresult.innerText = "";
}

// calculatrice
function btmCl(){
   result.value = "";
}

function del() {
   result.value = result.value.slice(0, -1);
}

function btm(val) {
   result.value += val;
}

function btmFloat() {
   var regex_nombre = /^[0-9]/g;
   var search_nombre = regex_nombre.test(result.value);

   var regex_float = /\./;
   var search_float = regex_float.test(result.value);
   var regex_operation = /(\+|\-|\/|\%|\*)/g;

   if(!search_nombre || result.value[result.value.length-1] == "+" || result.value[result.value.length-1] == "-" || result.value[result.value.length-1] == "/" || result.value[result.value.length-1] == "%" || result.value[result.value.length-1] == "*"){
      result.value += "0" + ".";
   }else{
      result.value +=".";
   }
}



function operation(operation) {
   // debut de operation
   var regex_nombre = /^[0-9]/g;
   var search_nombre = regex_nombre.test(result.value);
   if(!search_nombre){
      result.value += "0" + operation;
   }
   // la repetition d'operation
   var repitition_operation = /\+|\-|\/|\%|\*/g;
   var search_operation = repitition_operation.test(result.value);
   if(!search_operation){
      result.value += operation;
   }
   else{
      var conf_operation = result.value[result.value.length-1]
      if(conf_operation == "+" || conf_operation == "-" || conf_operation == "/" || conf_operation == "%" || conf_operation == "*"){
         result.value = result.value.replace(conf_operation , operation);
      }
      else{
         result.value += "0";
         btmEgal();
         result.value += operation;
      }
   }  
}

function btmEgal() {
   document.getElementById("hoperation").innerHTML += "<h3>" + result.value + "<h3>";
   var egal = eval(result.value);
   result.value = egal;
   document.getElementById("hresult").innerHTML += "<h3>" + "=" +  result.value + "<h3>";
}


// const addition = /\+/;
// const soustraction = /\-/;
// const division = /\//;
// const multiplication = /\*/;
// const pourcentage = /\%/;

   // switch (operation) {
//    case '+':
//       var type_operation = "+";
//    break
//    case '-':
//       var type_operation = "-";
//    break
//    case '*':
//       var type_operation = "*";
//    break
//    case '/':
//       var type_operation = "/";
//    break
//    case '%':
//       var type_operation = "%";
//    break
//    default:
// }
// console.log(type_operation);


// pour egal
// const conf_operation = /[0-9](\+|\-|\/|\%|\*|\.)[0-9]/g;

// pour operation
// const conf_operation = /[0-9]/g;

// pour la firgule
// const conf_operation = /(\+|\-|\/|\%|\*)[0-9]/g;


// var test = "12+3";
// const regex = /[0-9](\+|\-|\/|\%|\*)[0-9]/g;
// const n1_n2 = test.split(regex);
// console.log(n1_n2);
// switch ('+') {
//    case '+':
//       x = n1_n2[0] + n1_n2[1] ;
//       console.log(x);
//    break
//    case '-':
//       x = n1_n2[0] - n1_n2[1];
//       console.log(x);
//    break
//    case '*':
//       x = n1_n2[0] * n1_n2[1];
//       console.log(x);
//    break
//    case '/':
//       x = n1_n2[0] / n1_n2[1];
//       console.log(x);
//    break
//    case '%':
//       x = n1_n2[0] % n1_n2[1];
//       console.log(x);
//    break
//    default:
// }