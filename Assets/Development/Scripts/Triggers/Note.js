var pitch : String;
var colliding : boolean;
var triggers : TriggerManager;
function Start(){
	triggers = GameObject.FindObjectOfType(TriggerManager);
}
function OnTriggerEnter(other){
	colliding = true;
}

function OnTriggerExit(other){
	colliding = false;
}

function CheckPitch(_pitch){
	if( pitch == _pitch){
		Hit(_pitch);	
	}
}

function Hit( param : String){
	triggers.EmitEvent('CorrectNote', param);
	Destroy(this.gameObject);
}

function SetPitch( param : String) {
	pitch = param;
}