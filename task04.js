//http://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val){
    if (val === false || val === 0 || val === -0 || val === "" || val === null || val === undefined || val === NaN){
      return 'false';
    } else{
      return 'true';
    }
}