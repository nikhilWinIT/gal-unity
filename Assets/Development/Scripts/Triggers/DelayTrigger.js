class DelayTrigger extends Trigger {
	
	var delay : float;
	var triggers : TriggerGroup;
	private var startTime : float;
	private var counting : boolean;
	function Start(){
		counting = false;	
	}
	function Pull(param : String){
		startTime = Time.realtimeSinceStartup;	
		counting = true;
	}
	function Update(){
		if(counting){
			if( delay <= Time.realtimeSinceStartup - startTime){
				triggers.Pull();
				counting = false;
				}
		}	
	}
}