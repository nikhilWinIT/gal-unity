

class EnableTrigger extends Trigger {
	
	var enable : boolean = true;
	function Start() {
	}
	
	function Pull(param : String){
		for( var target : GameObject in targets){
			target.active = enable;
		}
	}
}