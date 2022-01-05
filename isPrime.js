function isPrime(num) {
    var flag = false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            flag = true;
            break;
        }
    }
    return flag;
}
var n = 7;
if (isPrime(n)) {
    console.log("The given number " + n + " is not a prime number");
}
else {
    console.log("The given number " + n + " is a prime number");
}