class MoveTrigger extends Trigger {
	var increment : float;
	var target : GameObject;
	function Pull(param : String){
		target.transform.Translate(increment, 0, 0);	
	}
}