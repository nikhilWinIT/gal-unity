

class DisableTrigger extends Trigger {
	var duration : float;	
	
	function Pull(param : String){
		for( var target : GameObject in targets){
			target.active = false;
		}
		Disable();	
		
	}
	function Disable(){
		yield WaitForSeconds(duration);
		for( var target in targets){
			target.active = true;	
		}
	}
}