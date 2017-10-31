
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //////////////  set all my variables    ///////////////////
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var img1 = Math.floor(Math.random()*12+1);
var img2 = Math.floor(Math.random()*12+1);
var img3 = Math.floor(Math.random()*12+1);
var img4 = Math.floor(Math.random()*12+1);
var winningNumber = " ";
var score = 0;
var losses = 0;
var wins = 0;
var randomNumber = Math.floor(Math.random()*120 + 24);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/////////  set my winning number and set score to 0   /////////
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

winningNumber =  Math.floor(Math.random()*120 + 24);
$('#winningNumber').text(winningNumber);


$("#score").text(score);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//////  my restart function, this kicks in when a loss or win occurs  ////////
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function restart () {
    img1 = Math.floor(Math.random()*12+1);
    img2 = Math.floor(Math.random()*12+1);
    img3 = Math.floor(Math.random()*12+1);
    img4 = Math.floor(Math.random()*12+1);
    winningNumber =  Math.floor(Math.random()*120 + 24);
    $('#winningNumber').text(winningNumber);
    score = 0;
    $("#score").text(score);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//////  this is where I set all my images to a value with if / else statements  //////
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/////   checks if score is a match w/ random number then adjust wins / losses etc  //////
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

$("#img1").click( function (event) {
    event.preventDefault();
    score+= img1;
    // $("img1").text();
    $("#score").text(score);
    if(winningNumber === score) {
        wins ++;
        $("#wins").text(wins);
        //   score = 0;
        alert("You Won");
        restart()
    }   else if(score > winningNumber){
        losses ++;
        $("#losses").text(losses);
        //  score = 0;
        alert("sorry you lost");
        restart()
    }

} );


$("#img2").on("click", function () {
    event.preventDefault();
    score+= img2;
    $("#score").text(score);
    if(winningNumber === score) {
        wins ++;
        $("#wins").text(wins);
        alert("You Won");
        restart()

    }   else if(score > winningNumber){
        losses ++;
        $("#losses").text(losses);
        alert("sorry you lost");
        restart()
    }

});


$("#img3").on("click", function () {
    event.preventDefault();
    score+= img3;
    $("#score").text(score);
    if(winningNumber === score) {
        wins ++;
        $("#wins").text(wins);
        alert("You Won");
        restart()
    }   else if(score > winningNumber){
        losses ++;
        $("#losses").text(losses);
        alert("sorry you lost");
        restart()
    }

});


$("#img4").on("click", function () {
    event.preventDefault();
    score+= img4;
    $("#score").text(score);
    if(winningNumber === score) {
        wins ++;
        $("#wins").text(wins);
        alert("You Won");
        restart()
    }   else if(score > winningNumber){
        losses ++;
        $("#losses").text(losses);
        alert("sorry you lost");
        restart()
    }

});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//////////   this function is to refresh the page when button is clicked   ///////////
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function restarted () {
    location.reload()

}