

class DelayTrigger extends Trigger {
	
	var delay : float;
	var triggers : TriggerGroup;
	function Pull(){
		yield WaitForSeconds(delay);
		triggers.Pull();
	}
}