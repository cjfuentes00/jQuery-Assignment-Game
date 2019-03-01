$(document).ready(function() {

// variables - wins, losses set to 0; crystals;
var win = 0;
var lost = 0;
var randomNumber;
var previous =0;


// This function will reset and start the game
var startGame = function () {

    //clear numbers before starting game
    $(".crystals").empty();

    var images = ["images/crystal_1.png", "images/crystal_2.png", "images/crystal_3.png", "images/crystal_4.png"];
    
    // Random number generator for the number player needs to reach, between 19-120.
    randomNumberGiven = Math.floor(Math.random() * 101) + 19;

    $("#random-number-given").html('Random result: ' + randomNumberGiven);

    for(var i = 0; i < 4; i++) {

        // Random number generator for each crystal, between 1-12.
        var randomNumber = Math.floor(Math.random() * 11) +1;
    
        //Styles for the crystals div and the assignment of a randomNumber for each crystal.  
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "random-data": randomNumber
            });

            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover"
            });
            // crystal.html(random);
        $("#crystals").append(crystal);
    }

    $("#previous").html(previous);
}


startGame();
var reset = function () {
 
}

// Event delegation
$(document).on('click', ".crystal", function () {

    // Convert the string to number
    var number = parseInt($(this).attr('random-data'));

    // Add number with previous number when crystal is clicked
    previous += number;
    // console.log(previous);

    $("#previous").html("#score-total" + previous);
    
    if(previous > randomNumberGiven) {
        lost ++;
        $("#losses").html(lost);
        
        previous = 0;

        startGame();
    } 
    else if(previous === randomNumberGiven) {
        win ++;
        $("#wins").html(win);

        previous = 0;

        startGame();
    }
    
});

// // Generate the random number that we are trying to reach
// var randomNum = randomNumGen();

// function randomNumGen() {
//     $("#random-")
//     return Math.floor(Math.random() * 100) + 1;
// // This is the div where the randomNumber will be printed...
//     $("#random-number").text(random);

// // Gives each crystal image the class ".crystal-image"
//     crystalImages.addClass("crystal-image");
// };

// // For loop to create crystals for each 


});
