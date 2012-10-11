
var bpm : float;
var signature : int;
var fadeRate : float = 0;
function OnEnable(){

}

function Play() {
	audio.Play();
}

function Pause(){
	audio.Pause();
}

function Stop() {
	audio.Stop();
}

function FadeIn(rate : float) {
	audio.volume = 0;
	Play();
	fadeRate = rate;
}

function FadeOut(rate : float) {
	fadeRate = -rate;
}

function Update() {
	if(fadeRate != 0) Fade();
}

function Fade() {
	if(audio.volume <= 1 || audio.volume >= 0) { 
		audio.volume += fadeRate;
	}
	else if(audio.volume <= 0){
		audio.Stop();
	}	
	
}

function Reset() {
	audio.Stop();
	audio.Play();
}