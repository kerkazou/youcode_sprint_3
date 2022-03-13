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

   if(!(result.value[result.value.length-1] == ".")){
      document.getElementById("btm_float").disabled = false;
      if(!search_nombre || result.value[result.value.length-1] == "+" || result.value[result.value.length-1] == "-" || result.value[result.value.length-1] == "/" || result.value[result.value.length-1] == "%" || result.value[result.value.length-1] == "*"){
         result.value += "0" + ".";
         document.getElementById("btm_float").disabled = true;
      }else{
         result.value +=".";
         document.getElementById("btm_float").disabled = true;
      }
   }
}



function operation(operation) {
   // debut de operation
   document.getElementById("btm_float").disabled = false;
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
         btmEgal();
         result.value += operation;
      }
   }  
}

// function btmEgal() {
//    document.getElementById("hoperation").innerHTML += result.value;
//    var egal = eval(result.value);
//    result.value = egal;
//    document.getElementById("hoperation").innerHTML += "=" +  result.value + "<br>";

//    var regex_nombre3 = /\./g;
//    var search_nombre3 = regex_nombre3.test(result.value);
//    if(!search_nombre3){
//       document.getElementById("btm_float").disabled = false;
//    }
// }

function btmEgal() {
   document.getElementById("hoperation").innerHTML += result.value;

   const addition = /\+/;
   const soustraction = /\-/;
   const division = /\//;
   const multiplication = /\*/;
   const pourcentage = /\%/;
   
   if(addition.test(result.value)){
      var test_valid_op = result.value.split(addition);
      var egal = parseInt(test_valid_op[0]) + parseInt(test_valid_op[1]);
   }
   if(soustraction.test(result.value)){
      var test_valid_op = result.value.split(soustraction);
      var egal = parseInt(test_valid_op[0]) - parseInt(test_valid_op[1]);
   }
   if(division.test(result.value)){
      var test_valid_op = result.value.split(division);
      var egal = parseInt(test_valid_op[0]) / parseInt(test_valid_op[1]);
   }   
   if(multiplication.test(result.value)){
      var test_valid_op = result.value.split(multiplication);
      var egal = parseInt(test_valid_op[0]) * parseInt(test_valid_op[1]);
   }
   if(pourcentage.test(result.value)){
      var test_valid_op = result.value.split(pourcentage);
      var egal = parseInt(test_valid_op[0]) % parseInt(test_valid_op[1]);
   }

   result.value = egal;
   document.getElementById("hoperation").innerHTML += "=" +  result.value + "<br>";
   var regex_nombre3 = /\./g;
   var search_nombre3 = regex_nombre3.test(result.value);
   if(!search_nombre3){
      document.getElementById("btm_float").disabled = false;
   }
}

   // switch ('+') {
   //    case '+':
   //       egal = n1_n2[0] + n1_n2[1];
   //    break
   //    case '-':
   //       egal = n1_n2[0] - n1_n2[1];
   //    break
   //    case '*':
   //       egal = n1_n2[0] * n1_n2[1];
   //    break
   //    case '/':
   //       egal = n1_n2[0] / n1_n2[1];
   //    break
   //    case '%':
   //       egal = n1_n2[0] % n1_n2[1];
   //    break
   //    default:
   // }