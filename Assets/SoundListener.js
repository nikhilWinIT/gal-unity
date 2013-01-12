#pragma strict


class SoundListener extends MonoBehaviour {
	var targetSounds : SoundNode[];
	var index : int = 0;
	var unlockSound : AudioClip;
	//var sounds : String[];
	function Start(){
		//sounds = new String[4];
	}
	function Register(notes){
		Match(notes);
	}
	function Match(notes : String[]){
		var targetNotes = targetSounds[index].notes;
		var length : int = 0;
		
		if(targetNotes.Length == notes.Length){
			Debug.Log('length match');	
			for( target in targetNotes){
				for( note in notes){
					Debug.Log(target + "," + note);
					if(target == note){
						
						length += 1;	
						break;
					}	
				}
			}
			if( targetNotes.Length == length){
				Debug.Log('correct');	
				index += 1;
			}
			else {
				Debug.Log('wrong');
				index = 0;	
			}
		}	
		CheckSequence();
	}
	function CheckSequence(){
		if(index == targetSounds.Length){
			var source = new GameObject();
			source.AddComponent(AudioSource);
			source.audio.PlayOneShot(unlockSound);
			yield WaitForSeconds(unlockSound.length);
			Destroy(source);
		}	
	}
}