function isPrime1(num:number): boolean{
    var flag:boolean = false;

    for(var i=2;i<=Math.sqrt(num);i++){
        if(num%i == 0 ){
            flag  = true;
            break;
        }
    }
    return flag;
}


function displayNPrime1(num:number){
    var count:number = 0;
    var value:number = 2;
    while(count!=num){
        if(!isPrime(value)){
            console.log(value);
            count++;
        }
        value++;
    }
}

displayPrime(10);