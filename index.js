// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet <= 400){
    return "This one is on me!"
  }
  else if (feet > 2500) {
    return "No can do."
  }
  else if (feet > 2000) {
    return "I will gladly take your thirty bucks."
  }


}




function ternaryCheckCity(city){
    city === "NYC"? return "Ok, sounds good." : return "No go."
  }


function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
    return 'Thank you so much.'
    break;
    case "not as generous":
    return"Thank you."
    break;
    default:
    return"Bye."
    break;
  }
}




// function switchOnCharmFromTip(tip){
//   switch (tip) {
//     case "generous":
//     return 'Thank you so much.'
//     break;
//     case "not as generous":
//     return"Thank you"
//     break;
//     default:
//     return"Bye."
//     break;
//   }
// }
