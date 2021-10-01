//Given an array of integers, 
//find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.


let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5 ,11];
let arrResalt = [];
for(i = 0;i < arr.length; i ++){
arrResalt.push(arr.filter(el => el === arr[i]));

}
console.log(arrResalt);
for(k = o;k < arrResalt.length;k ++){
if(!(arrResalt[k].length % 2 == 0)){
    console.log(arrResalt[k]);
    break;
}
else{
    continue;
}
};








const alligator = ["thick scales", 80, "4 foot tail", "rounded snout", 80];

alligator.filter(el => el === 80); //returns [80, 80]
console.log(alligator.filter(el => el === 80));