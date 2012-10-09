
class InputConditionalTrigger extends Trigger {
	
	var notes : NoteList; 
	function Start(){
		notes = GameObject.FindObjectOfType(NoteList);
	}
	function Pull(){
		Pull('C');	
	}
	function Pull(param : String){
		if(param.length == 0) param = 'C';
		for(var i = 0; i<notes.list.Count; i++){
			if( notes.list[i] == param){
				targets[i].GetComponent(TriggerGroup).Pull();
			}	
		}
	}

	
}