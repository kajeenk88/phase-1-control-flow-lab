function scuberGreetingForFeet(distance) {
  let result

  if (distance > 2500) {
    return (result = 'No can do.')
  } else if (distance > 2000) {
    return (result = 'I will gladly take your thirty bucks.')
  } else if (distance > 400 && distance <= 1500) {
    return 'That will be twenty bucks.'
  } else if (distance <= 400) {
    return (result = 'This one is on me!')
  }
}
console.log(scuberGreetingForFeet(199))
console.log(scuberGreetingForFeet(1500))
console.log(scuberGreetingForFeet(2001))
console.log(scuberGreetingForFeet(2501))

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
} 