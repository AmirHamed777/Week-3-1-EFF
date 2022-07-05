///function for CountdownTimer timer version1 week 1-2
function blastoffTimerV1(){
    console.log("start() finction started");
    // created var currTime and set equal to 10
    var currTime = 10; 
    console.log(currTime);
    document.getElementById("CountdownStatus").innerHTML = currTime;
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8 
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = "BLASTOFF!!";
        console.log(currTime);
    }, 10000)

}
// this is the function start for craps game 
function playCraps(){
    // this is the console log to annotate the beginning of craps game
    console.log("playCraps() started");
    // generate variables: die1, die2, sum
    var die1;
    var die2;
    var sum;
    // roll the dice
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    // sum of single die to equal between 1 and 6 
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    //determine the sum of the two dice and save it in sum 
    sum = die1 + die2;
    console.log("sum is equal to " + sum);

    //follow the rules of craps tell the status tell the status in crapsStatus
    // first lose 
    if(sum == 7 || sum == 11 ){
        document.getElementById("crapsStatus").innerHTML = "Craps!! You Lose!"
    } else if(die1 == die2 && die1%2 == 0){ 
        // first win
        document.getElementById("crapsStatus").innerHTML = "You Win!!!"
    } else {    
        // play again
        document.getElementById("crapsStatus").innerHTML = "You did not win or lose please play again!"
    }
}

function blastoffTimerV2(){   
console.log("blastoffTimerV2() started");
// want a loop that runs 11 times, 10 to 1 and then blastoff!
var CountdownTimer = 10;
var stepTime = 1000;

for (var i = 0; i < CountdownTimer; i = i + 1){
setTimeout(function(){
    console.log(CountdownTimer);
    document.getElementById("CountdownStatus").innerHTML = CountdownTimer;
    CountdownTimer = CountdownTimer - 1;
}, stepTime * i)
}
setTimeout(function(){
document.getElementById("CountdownStatus").innerHTML = "BLASTOFF!!";
console.log("BLASTOFF!!");
}, stepTime * CountdownTimer)
}