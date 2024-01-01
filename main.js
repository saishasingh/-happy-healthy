

function speak(){
    let msg = "GREETINGS!"+" "+"A healthy mind lives in a healthy body." +"   "+"We   encourge you to be healthy and happy." + "   " + "The name happy and healthy is given on this basis." 
    + "       "+"Various services are provided so that you can know well about your fitness." +"        "+"At last,we would like to wish a healthy and happy future.";
                     
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-US";
                
                speech.text = msg;
                
                
                
               synth =  window.speechSynthesis;
               synth.speak(speech);
}
function stop(){
    synth.cancel()
}