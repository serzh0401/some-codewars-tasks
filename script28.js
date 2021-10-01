//Ex n = 10
//Twin Primes are (3,5) (5,7) so your function should return 2! 
  

  let arr =[];
  let arrResalt = [];


function simpleNum(n){
   // let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

 arr.push ( i ); 
}
console.log(arr)
for(k=0;k<arr.length;k++){
  let arrTemp = [];
    if(isPrime(arr[k] + 2) == true){
       arrTemp.push(arr[k])
       arrTemp.push(arr[k] + 2) 
      arrResalt.push(arrTemp)
    }
    else{
        continue;
    }
}
console.log(arrResalt)
console.log(arrResalt.length)

}
simpleNum(500);

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  
  