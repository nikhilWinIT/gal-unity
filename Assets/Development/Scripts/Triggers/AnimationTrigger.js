
class AnimationTrigger extends Trigger {

	//enum TriggerTypes { GreaterThan, LessThan , Equal }
	var animClip : AnimationClip;
	var hooks : Hooks;
	var propertyName : String;
	//var triggerType : TriggerTypes;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	var fadeValue : float;
	var reverse : boolean;
	
	function Start() {
		hooks = GameObject.FindObjectOfType(Hooks);
		for( var target : GameObject in targets){
			if(!target.animation){
				target.AddComponent(Animation);
			}	
			target.animation.AddClip(animClip, animClip.name);
		}
	
	}
	function Update(){
		//Check();
	}
	
	function Check() {
	
		var _value = hooks.hooks[propertyName];
		if(_value >= valueMin && _value < valueMax){
			if(!triggered) Pull();
		}
		else {
			if(triggered) EnableTrigger();
		}
	}
	
	function Pull(){
		for( var target : GameObject in targets){
			target.animation.Stop();
			if(reverse){
				Debug.Log('reversed');
				target.animation[animClip.name].speed = -1.0;	
			}
			target.animation.CrossFade(animClip.name, fadeValue);
			triggered = true;
			Debug.Log('triggered');
		}
	}
	
	function EnableTrigger(){
		triggered = false;
	}
}