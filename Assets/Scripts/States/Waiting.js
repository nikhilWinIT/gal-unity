#pragma downcast
class Waiting extends State {
	var waitDuration : float = 4;
	var lastAction : float = 0;
	var timeEnabled : float;
	var actions : int = 0;
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		lastAction = Time.realtimeSinceStartup;
	}
	
	function Update () {
		if(Time.realtimeSinceStartup - lastAction > waitDuration )	{
			ResetLastAction();
			waitDuration += 1;
			owner.Sing();
			actions += 1;		
		}	
		
		
		
		if( Time.realtimeSinceStartup - startTime > 2) {
			Exit();
		}
	
	}
	
	function LastActionTime() {
		return Time.realtimeSinceStartup - lastAction;
		
	}
	
	function HearBeat() {
		if( LastActionTime() > 1.5) {
			ResetLastAction();
			SingAfterSeconds(.6);
		
		}
	}
	
	function SingAfterSeconds(duration) {
		yield WaitForSeconds(duration);
		owner.Sing();
	}
	
	function ResetLastAction(){
		lastAction = Time.realtimeSinceStartup;
	}
	function ExitAfterSeconds(duration : float) {
		yield WaitForSeconds(duration);
		Exit();
	}
	
	function Exit() {
		ChangeState('Singing');
	}	
}