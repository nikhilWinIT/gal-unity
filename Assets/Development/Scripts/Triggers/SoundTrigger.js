
class SoundTrigger extends Trigger {
	
	var clip : AudioClip;
	private var shiftFactor : float = 1.05946;
	private var frequencyTable = {
		"C": 1,
		"C#" : GetFrequency(1),
		"D" : GetFrequency(2),
		"D#": GetFrequency(3),
		"E" : GetFrequency(4),
		"F" : GetFrequency(5),
		"F#" : GetFrequency(6),
		"G" : GetFrequency(7),
		"G#" : GetFrequency(8),
		"A" : GetFrequency(9),
		"A#"  : GetFrequency(10),
		"B" : GetFrequency(11),
		"Ch" : GetFrequency(12)
	};
	function Pull(){
		Pull('C');	
	}
	function Pull(param : String){
		if(param.length == 0) param = 'C';
		var source = new GameObject();
		source.AddComponent(AudioSource);
		source.audio.pitch = frequencyTable[param];
		source.audio.PlayOneShot(clip);
		DestroyAfterSeconds(source, clip.length);
	}
	function DestroyAfterSeconds( object : GameObject, duration : float){
		yield WaitForSeconds(duration);
		Destroy(object);
	}

	var root : GameObject;
	var current : GameObject;
	
	function GetFrequency( pow : int) {
		return Mathf.Pow(shiftFactor, pow);
	}	
	 
	function SetSound( name : String) {
		current = root.transform.FindChild(name).gameObject;
	}
	
	function SetTone( source : GameObject, name : String) {
		_SetPitch(source, frequencyTable[name]);
	}
	
	private function _SetPitch( source : GameObject, pitch : float ){
		source.audio.pitch = pitch;
	}
	
	function Play( name : String) {
		var source = new GameObject();
		source.transform.parent = this.gameObject.transform;
		source.AddComponent(AudioSource);
		SetTone(source, name);
		source.audio.PlayOneShot(current.audio.clip);
		yield WaitForSeconds(current.audio.clip.length);
		Destroy(source);
	}
}