class Clock {
    constructor(hours, minutes, seconds, countryName) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.countryName = countryName;
    }

    ConverToSeconds() {
        let result = (this.hours * 3600) + (this.minutes * 60) + this.seconds;
        return result;
    };

    Show() {
        let tempstr = "";
        if (this.hours < 10)
        { tempstr += `0${this.hours}:`; }
        else { tempstr += `${this.hours}:`; }

        if (this.minutes < 10) { tempstr += `0${this.minutes}:`; }
        else { tempstr += `${this.minutes}:`; }

        if (this.seconds < 10) { tempstr += `0${this.seconds}`; }
        else { tempstr += `${this.seconds}`; }

        return tempstr;
    };

}
var CounterOfClocks = 0;
var clocksArr = [];

function ShowFunc() {
    let tempDiv = document.getElementById("EmptyDiv");
    tempDiv.innerHTML = ``;
    for (var i = 0; i < clocksArr.length; i++) {
        tempDiv.innerHTML += `<p> Country: ${clocksArr[i].countryName} , Time: ${clocksArr[i].Show()} , 
        Number of Seconds: ${clocksArr[i].ConverToSeconds()} </p>`; 
    }
}
function Submit() {
    let tempHours = document.getElementById("InpHours");
    if (!parseInt(tempHours.value) || (parseInt(tempHours.value) < 0) || (parseInt(tempHours.value) > 24)) {
        alert("Enter valid number of hours!");
        tempHours.focus();
        tempHours.value = "";
        return;
    }
    let tempMinutes = document.getElementById("InpMinutes");
    if (!parseInt(tempMinutes.value) || (parseInt(tempMinutes.value) < 0) || (parseInt(tempMinutes.value) > 60)) {
        alert("Enter valid number of minutes!");
        tempMinutes.focus();
        tempMinutes.value = "";
        return;
    }
    let tempSeconds = document.getElementById("InpSeconds");
    if (!parseInt(tempSeconds.value) || (parseInt(tempSeconds.value) < 0) || (parseInt(tempSeconds.value) > 60)) {
        alert("Enter valid number of seconds!");
        tempSeconds.focus();
        tempSeconds.value = "";
        return;
    }
    let tempCountry = document.getElementById("InpCountry");
    if (tempCountry.value == "")  {
        alert("Enter valid Country!");
        tempCountry.focus();
        tempCountry.value = "";
        return;
    }

    let CHours = parseInt(tempHours.value);
    let CMinutes = parseInt(tempMinutes.value);
    let CSeconds = parseInt(tempSeconds.value);
    let CCountry = tempCountry.value;

    //Create new clock:
    let C1 = new Clock(CHours, CMinutes, CSeconds, CCountry);

    //Add to Array and update counter:
    clocksArr.push(C1);
    CounterOfClocks++;

    //Clear inputs:
    tempHours.value = "";
    tempMinutes.value = "";
    tempSeconds.value = "";
    tempCountry.value = "";

    if (CounterOfClocks % 5 == 0) {
        ShowFunc();
    }
}



