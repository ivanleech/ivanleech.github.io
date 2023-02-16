var messageArray = ["huhu", "hihi"]
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector('#ityped').innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>";

    if (textPosition++ != messageArray[0].length)
        setTimeout(typewrite, speed);
}

window.addEventListener("load", typewriter)