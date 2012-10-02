
class Sound extends MonoBehaviour {
	private var shiftFactor : float = 1.05946;
	var frequencyTable;
	
	
	function Start(){
		
	frequencyTable = {
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
	 } 
	 
	function GetFrequency( pow : int) {
		return Mathf.Pow(shiftFactor, pow);
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
		source.audio.PlayOneShot(audio.clip);
		yield WaitForSeconds(audio.clip.length);
		Destroy(source);
	}
}