var triggers : TriggerManager;

function Start(){
	triggers = GameObject.FindObjectOfType(TriggerManager);
}
function OnTriggerEnter(other) {
	if(other.tag == "Companion"){
		Destroy(gameObject);	
		}	
	if(other.tag == "PlayerTarget"){
		triggers.EmitEvent('HitObstacle');
	}
}