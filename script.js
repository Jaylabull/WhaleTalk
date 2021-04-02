const input = "Turning around information into vowels";

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (i = 0; i < input.length; i++){

  for (v = 0; v < vowels.length; v++){
   
    if(input[i] === vowels[v]) {

      if(input[i] === 'e'){

        resultArray.push('ee');

        } else {

          resultArray.push(input[i]);

        }

      if(input[i] === 'u'){

        resultArray.push('uu');

        } else{

          resultArray.push(input[v]);
        }
     }

  }
 console.log(resultArray.join('').toUpperCase()); 
}