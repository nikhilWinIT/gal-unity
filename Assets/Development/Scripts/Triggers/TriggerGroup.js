class TriggerGroup extends MonoBehaviour {
	var eventIndex : int = 0;
	var event : String;
	var events : String[];
	var on : boolean;
	var oneShot : boolean;
	
	function Awake(){
	}
	
	function Pull(){
		if(on){
			var triggers = GetComponentsInChildren(Trigger);
			for(var trigger in triggers){
				trigger.Pull();	
			}
			if(oneShot) {
				on = false;
			    Destroy(this.gameObject);
			   }
		}	
	}
}