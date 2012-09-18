

class RangeTrigger extends MonoBehaviour{

	var hooks : Hooks;
	var triggers : TriggerManager;
	var propertyName : String;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	var eventOnEnter : String;
	var eventOnExit : String;
	
	function Start() {
		hooks = GameObject.FindObjectOfType(Hooks);
		triggers = GameObject.FindObjectOfType(TriggerManager);
	}
	function Update(){
		Check();
	}
	
	function Check() {
		var _value = hooks.hooks[propertyName];
		if(_value >= valueMin && _value < valueMax){
			if(!triggered) Enter();
		}
		else {
			if(triggered) Exit();
		}
	}
	
	function Enter(){
		triggers.EmitEvent(eventOnEnter);
	}
	
	function Exit(){
		triggers.EmitEvent(eventOnExit);
		EnableTrigger();	
	}
	
	function EnableTrigger(){
		triggered = false;
	}
}