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

function operation(operation) {
   result.value += operation;
   var search_addition = result.value.includes("+");
   var search_soustraction = result.value.includes("-");
   var search_multiplication = result.value.includes("*");
   var search_division = result.value.includes("/");
   var search_pourcentage = result.value.includes("%");
   if(search_addition || search_soustraction || search_multiplication || search_division || search_pourcentage){
      document.getElementById("addition_operation").disabled =
      document.getElementById("soustraction_operation").disabled =
      document.getElementById("multiplication_operation").disabled =
      document.getElementById("division_operation").disabled =
      document.getElementById("pourcentage_operation").disabled = true;
   }
}

function btmFloat() {
   result.value += ".";
   var search_float = result.value.includes(".");
   if(search_float){
      console.log("flaut is here");
      // document.getElementById("btm_float").disabled = true;
   }
}

function btmEgal() {
   document.getElementById("hoperation").innerHTML += "<h3>" + result.value + "<h3>";
   var egal = eval(result.value);
   result.value = egal;
   document.getElementById("hresult").innerHTML += "<h3>" + "=" +  result.value + "<h3>";
   document.getElementById("addition_operation").disabled =
   document.getElementById("soustraction_operation").disabled =
   document.getElementById("multiplication_operation").disabled =
   document.getElementById("division_operation").disabled =
   document.getElementById("pourcentage_operation").disabled = false;
}

   const addition = /\+/;
   const soustraction = /\-/;
   const division = /\//;
   const multiplication = /\*/;
   const pourcentage = /\%/;

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

   

   //  confirmation operation
   // var test = "+13312";
   // const conf_operation = /(\+|\-|\/|\%|\*)[0-9]/g;
   // if(conf_operation.test(test)){
   //    console.log("your operation is correct");
   // }else{
   //    console.log("your operation is incorrect");
   // }

   // pour egal
   // const conf_operation = /[0-9](\+|\-|\/|\%|\*|\.)[0-9]/g;

   // pour operation
   // const conf_operation = /[0-9]/g;

   // pour la firgule
   // const conf_operation = /(\+|\-|\/|\%|\*)[0-9]/g;


   // var test = "12 3";
   // const regex = " ";
   // const n1_n2 = test.split(regex);
   // console.log(n1_n2);
   // var n1 = n1_n2[0];
   // var n2 = n1_n2[1];
   // switch ("+") {
   //    case '+':
   //       result.value = n1_n2[0] + n1_n2[1] ;
   //    break
   //    case '-':
   //       result.value = n1 - n2;
   //    break
   //    case '*':
   //       result.value = n1 * n2;
   //    break
   //    case '/':
   //       result.value = n1 / n2;
   //    break
   //    case '%':
   //       result.value = n1 % n2;
   //    break
   //    default:
   // }
   // console.log(result.value);