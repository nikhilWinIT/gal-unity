class SoundManager extends MonoBehaviour {
	private var shiftFactor : float = 1.05946;
	var frequencyTable = {
		"C": 1,
		"Cs" : GetFrequency(1),
		"D" : GetFrequency(2),
		"Ds": GetFrequency(3),
		"E" : GetFrequency(4),
		"F" : GetFrequency(5),
		"Fs" : GetFrequency(6),
		"G" : GetFrequency(7),
		"Gs" : GetFrequency(8),
		"A" : GetFrequency(9),
		"As"  : GetFrequency(10),
		"B" : GetFrequency(11),
		"Ch" : GetFrequency(12)
	};
	var root : GameObject;
	var current : GameObject;
	
	
	function Start(){
		SetSound('Default');
		
	 } 
	 
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
		source.AddComponent(AudioSource);
		SetTone(source, name);
		source.audio.PlayOneShot(current.audio.clip);
		yield WaitForSeconds(current.audio.clip.length);
		Destroy(source);
	}
	
	function PlayByName( name : String) {
		var source = root.transform.FindChild(name).gameObject;
		source.audio.PlayOneShot(source.audio.clip);
	}
}