var colors = [];
var pickedColor;
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDispaly = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");''


init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i = 0; i<squares.length;i++){
        //add even listener to all squares
        squares[i].addEventListener("click",function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if(clickedColor===pickedColor){
                h1.style.backgroundColor = clickedColor;
                messageDispaly.textContent = "Correct";
                changeColor(clickedColor);
                resetButton.textContent = "Play Again";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDispaly.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons(){
    for(var i =0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Turnary operator
            //If this.textContent is eqaul to easy
            //then numSquares = 3 
            //else numSquares = 6
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function reset(){
    messageDispaly.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor()
    //cahnge color display to match picked color
    colorDispaly.textContent = pickedColor;

    resetButton.textContent = "New Colors";
    //change color of squres
    for(var i = 0; i < squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        } else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"    
}

resetButton.addEventListener("click",function(){
    reset();
});

function changeColor(color){
    //loop through all the squares 
    for(var i =0; i<colors.length;i++){
        squares[i].style.backgroundColor = color;
    }
    //change each color to mactch the given color
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    
    return colors[random];
}
function generateRandomColors(num){
    //make and array
    var arr = [];

    //add num random colors to array
    for(var i = 0; i<num;i++){
        //get random color and push into array
        arr.push(randomColor());
    }

    //return that array at the end
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var  r = Math.floor(Math.random()*256);
    //pick a green from 0 to 255
    var  g = Math.floor(Math.random()*256);
    //pick a blue from 0 to 255
    var  b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";


}