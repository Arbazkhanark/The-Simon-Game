'use strict'

var buttonColours=["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];

$('.btn').click(function(){
    var userChosenColour=$(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamepattern.push(randomChosenColour);

    //We use jQuery 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //Play sound
    playSound(randomChosenColour);
};

function playSound(name){
    var audio=new Audio(`sounds/${name}.mp3`);
    audio.play();
};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    //how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
};