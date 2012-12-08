
class NoteSwitchTrigger extends Trigger {
	
	var triggers : TriggerGroup[];
	private var shiftFactor : float = 1.05946;
	var notes : NoteList; 
	function Start(){
		notes = GameObject.FindObjectOfType(NoteList);
	}
	function Pull(){
		Pull('C');	
	}
	function Pull(param : String){
		//Debug.Log(param);
		if(param.length == 0) param = 'C';
		for(var i = 0; i<notes.list.Count; i++){
			if( notes.list[i] == param){
				if(triggers[i]){
					triggers[i].Pull(param);
				}
			}	
		}
	}
}