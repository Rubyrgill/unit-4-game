$(document).ready(function () {

    //VARIABLES 
    //-------------------------------------------
    var value = 0;
    var wins = 0;
    var losses = 0;
    var targetNum = [Math.floor(Math.random() * 102) + 19];
    console.log("This is " + targetNum);


    //FUNCTIONS/CONDITIONS/LOOPS
    //-------------------------------------------
    function startGame() {
        //Then append random number to html id 
        $("#targetnum").html(targetNum);

        //JEWEL ONE______________________________________
        value = [Math.floor(Math.random() * 12) + 1]

        console.log(" The value is  " + value)
        //create a var [ imageName = $("<img>"); ] to create a new html image section

        var gemImage = $("<img>");
        //add a class to the image 
        gemImage.addClass("gemmy")
        //add attribute, image source 
        gemImage.attr("src", "./assets/images/redgem.jpg");

        console.log(gemImage);

        //assign attribute to imageName, with string, and value of the number options[i]
        gemImage.attr("data-Gems", value);

        //append it all to the div or section in html 
        $("#jewel").append(gemImage);


        //JEWEL TWO _____________________________________

        valueTwo = [Math.floor(Math.random() * 12) + 1]
        console.log(" The value is  " + value)
        var gemImageTwo = $("<img>");
        //add a class to the image 
        gemImageTwo.addClass("gemmy")
        //add attribute, image source 
        gemImageTwo.attr("src", "./assets/images/bluegem.jpg");

        console.log(gemImageTwo);

        //assign attribute to imageName, with string, and value of the number options[i]
        gemImageTwo.attr("data-Gems", valueTwo);

        //append it all to the div or section in html 
        $("#jewel").append(gemImageTwo);



        //JEWEL THREE ___________________________________________
        valueThree = [Math.floor(Math.random() * 12) + 1]
        console.log(" The value is  " + value)
        var gemImageThree = $("<img>");
        //add a class to the image 
        gemImageThree.addClass("gemmy")
        //add attribute, image source 
        gemImageThree.attr("src", "./assets/images/diamondgem.jpg");

        console.log(gemImageThree);

        //assign attribute to imageName, with string, and value of the number options[i]
        gemImageThree.attr("data-Gems", valueThree);

        //append it all to the div or section in html 
        $("#jewel").append(gemImageThree);


        //JEWEL FOUR_________________________________________
        valueFour = [Math.floor(Math.random() * 12) + 1]
        console.log(" The value is  " + value)
        var gemImageFour = $("<img>");
        //add a class to the image 
        gemImageFour.addClass("gemmy")
        //add attribute, image source 
        gemImageFour.attr("src", "./assets/images/greengem.jpg");

        console.log(gemImageFour);

        //assign attribute to imageName, with string, and value of the number options[i]
        gemImageFour.attr("data-Gems", valueFour);

        //append it all to the div or section in html 
        $("#jewel").append(gemImageFour);




        //create a function for a click on image 
        var counter = 0;


        $(".gemmy").on("click", function () {
            var gemValue = ($(this).attr("data-Gems"));
            gemValue = parseInt(gemValue);

            counter += gemValue;

            alert("you clicked  " + counter + "  times!")





            startGame()

            //create if coundition for win/loss 

            if (counter === targetNum) {
                wins++;
                $("#wins").html(wins);
                startGame();


            }
            else if (counter >= targetNum)
                losses++;
            $("#loss").html(losses);
            startGame();

        });

    });
//CALLS






