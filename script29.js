//Pascal's triangle


let arr = [1]
let arr1 = [];
let arrResalt = [[1] , [1,1]]
let b = arrResalt[1];
console.log(b)
let c = [1,2,3,5,1]
//for(i=0;i<arr.length;i++){
   // arr1.push(arr[i] + (arr[i]+1))
//}
//arr1.unshift(1);
//arr1.push(1);
//console.log(arr1)


function sum(a){
    for(i=0;i<a.length-1;i++){
        
            return(a[i] + a[i + 1])
        
        
        
    }
    //return arr1
}
console.log(sum(c));

function addOne(a){
    a.unshift(1);
    a.push(1);
   return a
}  


for(k=0;k<=5;k++){
    let temp = []
    for(t=0;t<arrResalt[arrResalt.length-1].length-1;t++){
        temp.push(arrResalt[arrResalt.length-1][t] + arrResalt[arrResalt.length-1][t+1] )
    }
    //temp.push(sum(arrResalt[arrResalt.length - 1]))
    addOne(temp)
    arrResalt.push(temp)
    
    
}
console.log(arrResalt)
for(t=0;t<c.length -1;t++){
    console.log(c[t] + c[t+1] )
}