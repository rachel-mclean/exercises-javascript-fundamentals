/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  return findLetter(percentGrade) + findSymbol(percentGrade);
}

function findLetter(percentGrade){
  let tensNumber = Math.floor(percentGrade/10);
  if(tensNumber<6){
    return "F";
  }

  else if(tensNumber<7){
    return "D";
  }

  else if(tensNumber<8){
    return "C";
  }

  else if(tensNumber<9){
    return "B";
  }

  else if(tensNumber<=10){
    return "A";
  }
}

function findSymbol(percentGrade){
  if(percentGrade===100){
    return "+";
  }

  else if(percentGrade<60){
    return "";
  }

  else if(percentGrade%10<=2){
    return "-";
  }

  else if(percentGrade%10<=6){
    return "";
  }

  else{
    return "+";
  }
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  console.log(letterGrade(50)==='F');
  console.log(letterGrade(70)==='C-');
  console.log(letterGrade(89)==='B+');
  console.log(letterGrade(60)==='D-');
  console.log(letterGrade(10)==='F');
  console.log(letterGrade(100)==='A+');
  console.log(letterGrade(99)==='A+');
  console.log(letterGrade(0)==='F');
  console.log(letterGrade(81)==='B-');
}

module.exports = letterGrade;
