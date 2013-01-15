#pragma strict


class SoundListener extends MonoBehaviour {
	var targetSounds : SoundNode[];
	var index : int = 0;
	var unlockSound : AudioClip;
	var reward : GameObject;
	var clip : AudioClip;
	//var sounds : String[];
	function Start(){
		
		//sounds = new String[4];
	}
	function Register(notes, clipName){
		Match(notes, clipName);
	}
	
	function Match(notes : String[], clipName : String){
		var targetNotes = targetSounds[index].notes;
		var length : int = 0;
			
		if( clip.name == clipName && targetNotes.Length == notes.Length){
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
		else{
			index = 0;	
		}
		CheckSequence();
	}
	function CheckSequence(){
		if(index == targetSounds.Length){
			index = 0;
			Release();
		}	
	}
	
	function Release(){
		Instantiate(reward, transform.position, Quaternion.identity);
		var source = new GameObject();
		source.AddComponent(AudioSource);
		source.audio.PlayOneShot(unlockSound);
		yield WaitForSeconds(unlockSound.length);
		Destroy(source);
		Destroy(this.gameObject);
		
	}
}