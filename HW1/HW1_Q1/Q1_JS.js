class Counter {

    constructor(number) {
        this.number = number;
    }

    //Methods:
    Initialize(numValue) {
        this.number = numValue;
    }
    Increment() {
        this.number = this.number + 1;
    }
    Go() {
        var tempCounter = this.number;
        document.getElementById("DisplayDiv").innerHTML = "<p>";
        for (var i = 0; i <= tempCounter; i++) {

            document.getElementById("DisplayDiv").innerHTML += i + " | ";
        }
        document.getElementById("DisplayDiv").innerHTML += "</p>";
    }
}

//Create new object:
C1 = new Counter("e");

function CheckValid(tempNumberValue) {
    if (!parseInt(tempNumberValue)) {
        alert("Your selection is invalid Enter an integer!");
        return false;
    }
    return true;
}
function Start() {
    tempInput =document.getElementById("txtInput").value;
    if (!CheckValid(tempInput)) {
        document.getElementById("txtInput").value = "";
    }
    else {
        tempInput = parseInt(document.getElementById("txtInput").value);
        C1.Initialize(tempInput);
    }
}
function Plus() {
    C1.Increment();
    tempInput = document.getElementById("txtInput").value;
    if (CheckValid(tempInput)) {
        document.getElementById("txtInput").value = C1.number;
    }
    else return;
}
function GoFunc() {
    C1.Go();
}