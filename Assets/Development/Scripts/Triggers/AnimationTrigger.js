
class AnimationTrigger extends Trigger {

	//enum TriggerTypes { GreaterThan, LessThan , Equal }
	var animClip : AnimationClip;
	var propertyName : String;
	//var triggerType : TriggerTypes;
	var valueMin : float;
	var valueMax : float;
	var triggered : boolean;
	var fadeValue : float;
	var reverse : boolean;
	
	function Start() {
		for( var target : GameObject in targets){
			if(!target.animation){
				target.AddComponent(Animation);
			}	
			target.animation.AddClip(animClip, animClip.name);
		}
	
	}
	
	function Pull(param : String){
		for( var target : GameObject in targets){
			target.animation.Stop();
			if(reverse){
				target.animation[animClip.name].speed = -1.0;	
			}
			target.animation.Play(animClip.name);
			triggered = true;
		}
	}
	
	function EnableTrigger(){
		triggered = false;
	}
}