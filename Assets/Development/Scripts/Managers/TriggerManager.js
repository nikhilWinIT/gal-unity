function EmitEvent( e: String) {
	EmitEvent(e, '');	
}	

function EmitEvent( e : String, param : String){
	var groups = GameObject.FindObjectsOfType(TriggerGroup);
	for( var group in groups){
		if(group.event == e){
			group.Pull(param);
		}
	}
}