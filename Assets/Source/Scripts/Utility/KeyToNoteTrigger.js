


class KeyToNoteTrigger extends Trigger {
	
 var pitch :  String;
 var pitchIndex : int;
  var notes : NoteList;
	 var triggers : TriggerManager;
	function Start() {
		triggers = GameObject.FindObjectOfType(TriggerManager);
		notes = GameObject.FindObjectOfType(NoteList);
	}
	
	function Pull(param : String){
		triggers.EmitEvent('AnyKey', pitch);
	}
}