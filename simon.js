'use strict'

var buttonColours=["red","blue","green","yellow"];
var gamepattern=[];

$('.btn').click(function(){
    var userChosenColour=$(this).attr('id');
    
    gamepattern.push(userChosenColour);

    playSound(userChosenColour);
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
