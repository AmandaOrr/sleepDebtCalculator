const getSleepHours = day =>{
  switch(day) {
    case 'Monday':
    return 8;
    break;
    case 'Tuesday':
    return 6;
    break;
    case 'Wednesday':
    return 8;
    break;
    case 'Thursday':
    return 7;
    break;
    case 'Friday':
    return 6;
    break;
    case 'Saturday':
    return 7;
    break;
    case 'Sunday':
    return 10;
    break;
    default:
    break;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');  

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDebt;

  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  } else if(actualSleepHours > idealSleepHours){
    console.log('You got more sleep than you needed');
  } else if(actualSleepHours < idealSleepHours){
    sleepDebt = idealSleepHours - actualSleepHours;
    console.log (`You need to get more sleep, your sleep debt is  ${sleepDebt} hours.`);  
  }

}

calculateSleepDebt();
