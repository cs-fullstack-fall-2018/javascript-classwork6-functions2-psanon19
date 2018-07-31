function aboveOrBelow100(number)
{
    if (number>100)
    {
        alert("You number, "+number+", is greater than 100")
    }
    else if (number==100)
    {
        alert("You number, "+number+", is equal to 100")
    }
    else
    {
        alert("You number, "+number+", is less than 100")
    }
}

function numberPromt(userInput)
{
    alert("Your favorite numberis is "+userInput);
    aboveOrBelow100(userInput)
}


function main()
{
    var favoriteNumber = prompt("What is your favorite number?")
    numberPromt(favoriteNumber)
}

main();