class SoundManager extends MonoBehaviour {
	var track : GameObject;
	var index : int = 1;
	var size : int = 4;
	var filePrefix : String;
	function Start() {
		filePrefix = 'Sound';
		SetTrack(index);
		
	}
	function SetTrack(index) {
		
		track = GameObject.Find(filePrefix+index);
	}
	
	function Play() {
		track.audio.PlayOneShot(track.audio.clip);
	}
	
	function NextTrack() {
		index += 1;
		if (index > size) {
			index = 1;
		}
		Reset();
	}
	function PrevTrack() {
		index -= 1;
		if (index < 1) {
			index = size;
		}
		Reset();
	}
	
	function Reset() {
		SetTrack(index);
	}

}

