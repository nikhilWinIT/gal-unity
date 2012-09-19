
function EmitEvent( e: String) {
	EmitEvent(e, '');	
}	

function EmitEvent( e : String, param : String){
	var triggers = GameObject.FindGameObjectsWithTag('Trigger');
	for( var object in triggers){
		var trigger = object.GetComponent(Trigger);
		if(trigger.event == e){
			trigger.Trigger();
		}
	}
}