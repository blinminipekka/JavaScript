var numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15]

sum = 0;

for(i=0; i<15; i++ ){
    sum = sum + numbers[i]
}
console.log(sum);


shuma = 0;

for(x of numbers){
    shuma += parseInt(x);
}
console.log(shuma);