let text="Hi , I'm Cortana";
let speech=new SpeechSynthesisUtterance();

function TextToSpeech(){

    speech.text=text;
    speech.rate=1;
    speech.volume=1;
    speech.pitch=1;

    //Speak in language
    speech.lang="en-US";
    speechSynthesis.speak(speech);
}
TextToSpeech();