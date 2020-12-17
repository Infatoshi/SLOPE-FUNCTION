
document.getElementById("inputbutton").addEventListener('click', calculate);
let ansOutEl = document.getElementById('SlopeOutput');




function calculate() {
    // Inputs
    let x1 = +document.getElementById('enterPoint1').value;
    let y1 = +document.getElementById('enterPoint2').value;
    let x2 = +document.getElementById('enterPoint3').value;
    let y2 = +document.getElementById('enterPoint4').value;

    // Output Results
    ansOutEl.innerHTML = getSlope(x1, y1, x2, y2);
}

function getSlope(a, b, c, d) {
    return (d - b) / (c - a);
     
       
}

