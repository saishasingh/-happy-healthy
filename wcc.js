function convert(valNum){
    var aa = document.getElementById("lbsInput").value;

    var c=document.getElementById("gramsOutput").innerHTML=valNum*1000;
   

    var a=document.getElementById("kgOutput").innerHTML=valNum*2.2046;
    
    var b = document.getElementById("ozOutput").innerHTML=valNum*35.274;
         let msg = "Your weight in grams" + c+ "your weight in pounds is" + a + "your weight in ounces is"+b;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    
    
    
   synth =  window.speechSynthesis;
   synth.speak(speech);
      if (a == 0){
        synth.cancel();

      }
    
}