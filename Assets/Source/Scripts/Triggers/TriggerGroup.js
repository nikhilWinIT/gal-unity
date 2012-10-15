class TriggerGroup extends MonoBehaviour {
	var eventIndex : int = 0;
	var event : String = 'None';
	var events : String[];
	var on : boolean = true;
	var oneShot : boolean;
	
	function Awake(){
	}
	
	function Pull(){
		Pull('');	
	}
	function Pull(param : String){
		if(on){
			var triggers = GetComponentsInChildren(Trigger);
			for(var trigger : Trigger in triggers){
				trigger.Pull(param);	
			}
			if(oneShot) {
				on = false;
			   }
		}	
	}
}