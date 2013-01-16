#pragma strict
var ptc : ParticleSystem;
var rate : float;
var emit : boolean;
function Start () {

		ptc = GetComponent(ParticleSystem);
		ptc.emissionRate = 0;
}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		emit = true;
	}
	else if(Input.GetMouseButtonUp(0)){
		emit = false;	
	}
	if(emit && ptc.emissionRate == 0){
		ptc.emissionRate = rate;	
	}
	else {
		ptc.emissionRate = 0;	
	}
}