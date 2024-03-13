document.getElementById('refreshButton').addEventListener('click', function() {
   
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;



    function dice(randomNumber1, randomNumber2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    }

    dice(randomNumber1, randomNumber2);



    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins";
    } else {
            document.querySelector("h1").textContent = "Player 2 Wins🚩";
    }

});
