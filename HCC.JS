
function calculateHeight(){
    var f = parseInt(document.getElementById("feet").value * 12);
    var i = parseInt(document.getElementById("inches").value);
    var cm = (f+i) * 2.54;
    var n = cm.toFixed(0);
    document.getElementById("result").innerHTML = "Your height is " + n + "cm";

    let msg = "Your height is" + n + "centimeter";
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-US";
                
                speech.text = msg;
                
                
                
               synth =  window.speechSynthesis;
               synth.speak(speech);
}



