//Synchronize numbers with the sliders.
function updateHeight() {
    var height = document.getElementById("heightRange").value;
    document.getElementById("heightNumber").value = height + " m";
}
function updateWeight() {
    var weight = document.getElementById("weightRange").value;
    document.getElementById("weightNumber").value = weight + " kg";
}

//Register constructor.
class historyRegister {
    constructor(imc, hours, minutes, day, month, fullYear) {
        this.imc = imc;
        this.hours = hours;
        this.minutes = minutes;
        this.day = day;
        this.month = month;
        this.fullYear = fullYear;
    }
}

//Button to calculate IMC
function showIMC() {
    let imcElement = document.getElementById("imc");
    let videoElement = document.getElementById("video");
    var weight = document.getElementById("weightRange").value;
    var height = document.getElementById("heightRange").value;
    let imc = (weight / (height * height)).toPrecision(2);
    imcElement.innerHTML = "Tu índice de masa corporal es de " + imc + ".<br>";
    switch (true) {
        case imc < 18.5:
            imcElement.innerHTML += "Podrías tratar de aumentarlo para evitar problemas de salud!";
            videoElement.src = "https://www.youtube.com/embed/X8G4P2A5vnY?si=VbvEOHCCQilJULv8";
            break;
        case imc >= 18.5 && imc <= 24.9:
            imcElement.innerHTML += "Enhorabuena! Si quieres, puedes mejorar tu musculatura.";
            videoElement.src = "https://www.youtube.com/embed/Me73Cv6Skak?si=gBhmDURmjX2YgmO7";
            break;
        case imc > 24.9 && imc <= 29.9:
            imcElement.innerHTML += "Podría ser positivo para tí tratar de disminuirlo!";
            videoElement.src = "https://www.youtube.com/embed/ebfRQkf6GYY?si=Q3X4PbbE-9p5RKAx";
            break;
        case imc > 29.9 && imc <= 34.9:
            imcElement.innerHTML += "Es importante para tu bienestar que lo disminuyas!";
            videoElement.src = "https://www.youtube.com/embed/tG-qkODUC8g?si=bLPuEPZjlXe6sXvb";
            break;
        case imc > 34.9:
            imcElement.innerHTML += "Te recomiendo que pidas ayuda profesional para evitar disgustos!";
            videoElement.src = "https://www.youtube.com/embed/FINogquQy3o?si=Y3HMRHb37Vf6_Do9";
            break;
    }
    //Current local user's time
    var now = new Date();
    //Fills with zero if there is only one digit
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var fullYear = now.getFullYear();
    //Store imc and date in localStorage
    let register = new historyRegister(imc, hours, minutes, day, month, fullYear);
    localStorage.setItem(localStorage.length + 1, JSON.stringify(register));
}

//Button to show history
function showHistory() {
    let historyTextElement = document.getElementById("historyText");
    if (JSON.parse(localStorage.getItem(1) == null)) {
        alert("No hay datos almacenados en el historial");
    } else {
        historyTextElement.innerHTML = "";
        for (let i = 1; i <= localStorage.length; i++) {
            const finalLog = JSON.parse(localStorage.getItem(i));
            historyTextElement.innerHTML += "<b>IMC: </b>" + finalLog.imc;
            historyTextElement.innerHTML += "<b>      Hora:</b>" + finalLog.hours + ":" + finalLog.minutes;
            historyTextElement.innerHTML += "<b>      Fecha: </b>" + finalLog.day;
            historyTextElement.innerHTML += "/" + finalLog.month;
            historyTextElement.innerHTML += "/" + finalLog.fullYear;
            historyTextElement.innerHTML += "<br><br>";
        }
    }
}

//Button to erase history
function resetHistory() {
    document.getElementById("historyText").innerHTML = "";
    localStorage.clear();
}


