class NoteHitTrigger extends Trigger {
	
	function Pull( param : String){
		var notes = GameObject.FindObjectsOfType(Note);
		for( var note in notes){
			if ( note.colliding ){
				note.CheckPitch(param);	
			}	
		}
	}
}