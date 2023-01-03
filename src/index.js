module.exports = function toReadable (number) {
  let st = number.toString();
  let result = '';
  
  if (st[0] === '1' && st.length === 1) {
    result = result + 'one';
  } else if (st[0] === '2' && st.length === 1) {
     result = result + 'two';
  } else if (st[0] === '3' && st.length === 1) {
     result = result + 'three';
  } else if (st[0] === '4' && st.length === 1) {
     result = result + 'four';
  } else if (st[0] === '5' && st.length === 1) {
     result = result + 'five';
  } else if (st[0] === '6' && st.length === 1) {
     result = result + 'six';
  } else if (st[0] === '7' && st.length === 1) {
     result = result + 'seven';
  } else if (st[0] === '8' && st.length === 1) {
     result = result + 'eight';
  } else if (st[0] === '9' && st.length === 1) {
     result = result + 'nine';
  } else if (st[0] === '0' && st.length === 1) {
     result = result + 'zero';
  }

  if (st.length > 1 && st[st.length - 2] === '2' && number % 10 !== 0) {
      result = 'twenty ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '3' && number % 10 !== 0) {
      result = 'thirty ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '4' && number % 10 !== 0) {
      result = 'forty ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '5' && number % 10 !== 0) {
      result = 'fifty ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '6' && number % 10 !== 0) {
      result = 'sixty ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '7' && number % 10 !== 0) {
      result = 'seventy ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '8' && number % 10 !== 0) {
      result = 'eighty ' + result;
    } else if (st.length > 1 && st[st.length - 2] === '9' && number % 10 !== 0) {
      result = 'ninety ' + result;
    }

  if (st.length > 1 && st[st.length - 2] === '2' && number % 10 === 0) {
      result = 'twenty' + result;
    } else if (st.length > 1 && st[st.length - 2] === '3' && number % 10 === 0) {
      result = 'thirty' + result;
    } else if (st.length > 1 && st[st.length - 2] === '4' && number % 10 === 0) {
      result = 'forty' + result;
    } else if (st.length > 1 && st[st.length - 2] === '5' && number % 10 === 0) {
      result = 'fifty' + result;
    } else if (st.length > 1 && st[st.length - 2] === '6' && number % 10 === 0) {
      result = 'sixty' + result;
    } else if (st.length > 1 && st[st.length - 2] === '7' && number % 10 === 0) {
      result = 'seventy' + result;
    } else if (st.length > 1 && st[st.length - 2] === '8' && number % 10 === 0) {
      result = 'eighty' + result;
    } else if (st.length > 1 && st[st.length - 2] === '9' && number % 10 === 0) {
      result = 'ninety' + result;
    }

  if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '0') {
      result = 'ten' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '1') {
      result = 'eleven' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '2') {
      result = 'twelve' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '3') {
      result = 'thirteen' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '4') {
      result = 'fourteen' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '5') {
      result = 'fifteen' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '6') {
      result = 'sixteen' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '7') {
      result = 'seventeen' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '8') {
      result = 'eighteen' + result;
    } else if (st.length > 1 && st[st.length - 2] === '1' && st[st.length - 1] === '9') {
      result = 'nineteen' + result;
    }

if (st[st.length - 1] === '1' && st.length > 1 && st[st.length - 2] !== '1') {
    result = result + 'one';
  } else if (st[st.length - 1] === '2' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'two';
  } else if (st[st.length - 1] === '3' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'three';
  } else if (st[st.length - 1] === '4' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'four';
  } else if (st[st.length - 1] === '5' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'five';
  } else if (st[st.length - 1] === '6' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'six';
  } else if (st[st.length - 1] === '7' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'seven';
  } else if (st[st.length - 1] === '8' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'eight';
  } else if (st[st.length - 1] === '9' && st.length > 1 && st[st.length - 2] !== '1') {
     result = result + 'nine';
  } 

  if (st.length === 3 && st[0] === '1' && number % 100 !== 0) {
    result = 'one hundred ' + result;
  } else if (st.length === 3 && st[0] === '2' && number % 100 !== 0) {
    result = 'two hundred ' + result;
  } else if (st.length === 3 && st[0] === '3' && number % 100 !== 0) {
    result = 'three hundred ' + result;
  } else if (st.length === 3 && st[0] === '4' && number % 100 !== 0) {
    result = 'four hundred ' + result;
  } else if (st.length === 3 && st[0] === '5' && number % 100 !== 0) {
    result = 'five hundred ' + result;
  } else if (st.length === 3 && st[0] === '6' && number % 100 !== 0) {
    result = 'six hundred ' + result;
  } else if (st.length === 3 && st[0] === '7' && number % 100 !== 0) {
    result = 'seven hundred ' + result;
  } else if (st.length === 3 && st[0] === '8' && number % 100 !== 0) {
    result = 'eight hundred ' + result;
  } else if (st.length === 3 && st[0] === '9' && number % 100 !== 0) {
    result = 'nine hundred ' + result;
  }

  if (st.length === 3 && st[0] === '1' && number % 100 === 0) {
    result = 'one hundred' + result;
  } else if (st.length === 3 && st[0] === '2' && number % 100 === 0) {
    result = 'two hundred' + result;
  } else if (st.length === 3 && st[0] === '3' && number % 100 === 0) {
    result = 'three hundred' + result;
  } else if (st.length === 3 && st[0] === '4' && number % 100 === 0) {
    result = 'four hundred' + result;
  } else if (st.length === 3 && st[0] === '5' && number % 100 === 0) {
    result = 'five hundred' + result;
  } else if (st.length === 3 && st[0] === '6' && number % 100 === 0) {
    result = 'six hundred' + result;
  } else if (st.length === 3 && st[0] === '7' && number % 100 === 0) {
    result = 'seven hundred' + result;
  } else if (st.length === 3 && st[0] === '8' && number % 100 === 0) {
    result = 'eight hundred' + result;
  } else if (st.length === 3 && st[0] === '9' && number % 100 === 0) {
    result = 'nine hundred' + result;
  }
  
  return result;
}
