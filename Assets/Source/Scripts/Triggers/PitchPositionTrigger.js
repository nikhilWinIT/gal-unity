
class PitchPositionTrigger extends Trigger {
	private var shiftFactor : float = 1.05946;
	var target : GameObject;
	var notes : NoteList; 
	private var triggers : TriggerManager;
	function Start(){
		triggers = GameObject.FindObjectOfType(TriggerManager);
		notes = GameObject.FindObjectOfType(NoteList);
	}
	function Pull(){
		Pull('C');	
	}
	function Pull(param : String){
//		Debug.Log(param);
		if(param.length == 0) param = 'C';
		for(var i = 0; i<notes.list.Count; i++){
			if( notes.list[i] == param){
				target.transform.position.y = targets[i].transform.position.y;
			}	
		}
		if(target.tag == 'Companion'){
			triggers.EmitEvent('CompanionBeat', param);	
		}
		if(target.tag == 'Player'){
			triggers.EmitEvent('PitchPosition')	;
		}
	}

	
}