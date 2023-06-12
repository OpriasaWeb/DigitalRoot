// June 12, 2023
// CodeWars: Digital Root (6 kyu challenge)
// Description: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {

  var splitN = splitAndAdd(n);
  
  while(splitN >= 10){
    splitN = splitAndAdd(splitN)
  } 
  
  console.log("Inside: "+splitN)
  
  return splitN;
  
}

digitalRoot(493193);

function splitAndAdd(n){
  
  var splitN = n.toString().split('');
  
  console.log(splitN)
  
  var result = 0;
  
  for(let i = 0; i < splitN.length; i++){
    
    var numSplit = parseInt(splitN[i])
    
    result += numSplit;
    
  }
  return result;
  
}

console.log(splitAndAdd(29999))


// ----- Best Practices ----- //

// function digital_root(n) {
//   var calc = 0;
//   var num = n.toString();
//   var nc = 0;
//   var nc2 = 0;
 
//   array = num.split('');
//   array.forEach(function(item){
//     nc = parseInt(item);
//     calc = calc + nc;
//   });
//   while (calc > 9){
//     number = calc.toString();
//     calc = 0;
//     arrayNum = number.split('');
//     arrayNum.forEach(function(item2){
//       nc2 = parseInt(item2);
//       calc = calc + nc2; 
//     });
    
//   }
  
//  return calc;
// }

// ----- Best Practices ----- //