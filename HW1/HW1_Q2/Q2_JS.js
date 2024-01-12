class Duck {

    constructor(name,color,age,weight,picture) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.picture = picture;
    }
    Show() {
        var tempStr = "";
        tempStr = `name: ${this.name} , Color: ${this.color} , Age: ${this.age} , Weight: ${this.weight} `;
        tempStr += `<img src="${this.picture}" alt="Uploaded Image" width="200" height="200" />`;
        return tempStr;
    };
    Quack() {
        var tempStr = "";
        for (var i = 0; i < (this.age * this.weight)/2 ; i++) {
            tempStr += "Quack , ";
        }
        return tempStr;
    };
}


function ToggleSAndQBtns() {
    var ToggelDiv = document.getElementById("BtnCol");
    if (ToggelDiv.style.display === "") {
        document.getElementById("BtnCol").style.display = "block";
    } else {
        document.getElementById("BtnCol").style.display = "none";
    }
}


function Submit() {

    var tempName = document.getElementById("InpName").value;
    if (tempName == "") {
        alert("Enter Name!");
        document.getElementById("InpName").focus();
        return;
    }
    var tempColor = document.getElementById("InpColor").value;
    if (tempColor == "") {
        alert("Enter  valid Color!");
        document.getElementById("InpColor").focus();
        return;
    }
    var tempAge = document.getElementById("InpAge").value;
    if (tempAge == "" || !parseInt(tempAge) || parseInt(tempAge)<0 ) {
        alert("Enter valid Age!");
        document.getElementById("InpAge").value="";
        document.getElementById("InpAge").focus();
        return;
    }
    var tempWeight = document.getElementById("InpWeight").value;
    if (tempWeight == "" || !parseInt(tempWeight) || parseInt(tempWeight)<0 ) {
        alert("Enter valid Weight!");
        document.getElementById("InpWeight").value="";
        document.getElementById("InpWeight").focus();
        return;
    }
    var tempImage = document.getElementById("InpImage");
    if (!tempImage.files[0]) {
        alert("You Must upload image!");
        return;
    }

    /*Saving the URL of the image that the user uploaded:*/
    var userFile = tempImage.files[0];
    var imageUrl = URL.createObjectURL(userFile);

    /*create new obj of Duck class:*/
    duckN = new Duck(tempName, tempColor, parseInt(tempAge), parseInt(tempWeight), imageUrl);
    ToggleSAndQBtns();
    document.getElementById("CreateBtn").disabled = true;
}

function ShowFunc() {
    tempDiv = document.getElementById("EmptyDiv");
    tempDiv.innerHTML = `<p>`;
    tempDiv.innerHTML += duckN.Show();
    tempDiv.innerHTML += `</p>`;
}

function playDuckSound() {
    let audio = new Audio("quack_5.mp3");
    let interval = setInterval(myTimer, 1000);
    let stopquacking = setTimeout(clear, 3000);
    function myTimer() { audio.play(); }
    function clear() { clearInterval(interval); }
    }

function QuackFunc() {
    tempDiv = document.getElementById("EmptyDiv");
    tempDiv.innerHTML = `<p>`;
    tempDiv.innerHTML += duckN.Quack();
    tempDiv.innerHTML += `</p>`;
    playDuckSound();
}




