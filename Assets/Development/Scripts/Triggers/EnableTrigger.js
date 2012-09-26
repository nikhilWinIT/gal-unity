

class EnableTrigger extends Trigger {
	
	var enable : boolean = true;
	function Start() {
	}
	
	function Pull(){
		Debug.Log('triggered');
		for( var target : GameObject in targets){
			Debug.Log('toggled: ' + enable);
			target.active = enable;
		}
	}
}