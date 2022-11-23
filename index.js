function scuberGreetingForFeet(feet){
  // Write your code here!
  let msg;
  if(feet > 2500){
    msg = 'No can do.';
  }else if(feet > 2000){
    msg = 'I will gladly take your thirty bucks.';
  }else if(feet <= 400){
    msg = 'This one is on me!';
  }else{
  }
  return msg;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC") ? "Ok, sounds good." : 'No go.';
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch(tip){
    case 'generous':
      response = "Thank you so much."
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.';
  }
  return response;
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');