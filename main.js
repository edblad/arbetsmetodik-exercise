function getThingsAndAmount() {
    let thing = prompt("What's the thing?");
    let amount = prompt("How many?");
    
    checkInputTypes(thing, amount);
}

function checkInputTypes(thing, amount){
    if(isNaN(thing) && !isNaN(amount)){
        displaySentence(thing, amount);
    }else{
        alert("Please try again");
        getThingsAndAmount();
    }
}

function displaySentence(thing, amount){
    const output = document.getElementById('output');
    
    if(amount > 1){
        output.innerHTML = "There are " + amount + " " + thing + "s";
    }else if(amount == 1){
        output.innerHTML = "There is " + amount + " " + thing;
    }else{
        output.innerHTML = "There are no " + thing + "s";
    }
}

getThingsAndAmount();