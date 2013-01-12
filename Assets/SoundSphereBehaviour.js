#pragma strict


class SoundSphereBehaviour extends MonoBehaviour {
	var notes : String[];
	function Start(){
		yield WaitForSeconds(2);
		GameObject.Destroy(gameObject);	
	}
	function SetNotes( _notes : String[]){
		notes = _notes;	
	}
	function OnTriggerEnter(col : Collider){
		var listener : SoundListener = col.gameObject.GetComponent(SoundListener);
		if(listener){
			listener.Register(notes);	
		}
	}	
}