
class AnimationTrigger extends Trigger {

	//enum TriggerTypes { GreaterThan, LessThan , Equal }
	var animClip : AnimationClip;
	var hooks : Hooks;
	var propertyName : String;
	//var triggerType : TriggerTypes;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	
	function Start() {
		hooks = GameObject.FindObjectOfType(Hooks);
		for( var target : GameObject in targets){
			target.animation.AddClip(animClip, animClip.name);
		}
	
	}
	function Update(){
		//Check();
	}
	
	function Check() {
	
		var _value = hooks.hooks[propertyName];
		if(_value >= valueMin && _value < valueMax){
			if(!triggered) Trigger();
		}
		else {
			if(triggered) EnableTrigger();
		}
	}
	
	function Trigger(){
		for( var target : GameObject in targets){
			target.animation.Stop();
			target.animation.CrossFade(animClip.name);
			triggered = true;
		}
	}
	
	function EnableTrigger(){
		triggered = false;
	}
}