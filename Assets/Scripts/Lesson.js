class Lesson extends MonoBehaviour {
	var track : Track;
	var pattern : Pattern;
	var index : int = 0;
	var repeat : int = 1;
	var checkTone : boolean = true;
	var checkRhythm : boolean = true;
	private var beatLength : float;
	private var baseTime : float;
	private var triggers : TriggerManager;
	private var offset : float = 0;
	private var inputIndex : int = 0;
	
	function Initialize( _triggerManager : TriggerManager){
		triggers = _triggerManager;
		beatLength = 60/track.bpm;
	}
	function Restart(){
		index = 0;
		track.Stop();
		track.Play();
		baseTime = Time.realtimeSinceStartup;
		
	}
	function Stop(){
		track.Stop();
	}
	function CheckForNote() {
		var elapsed = Time.realtimeSinceStartup - baseTime;
		if( elapsed > beatLength * track.signature){
			Restart();
		}
		else {
			if (index > pattern.rhythm.length-1){
		
			}
			else if( elapsed > beatLength * pattern.rhythm[index]){
				triggers.EmitEvent('PlayLessonBeat');
				index += 1;
			}
		}
	}
	function SendInput(name : String){
		if(checkTone){
			Debug.Log(name);
			if(name == pattern.melody[inputIndex]){
				triggers.EmitEvent('CorrectTone');
				Debug.Log('Right tone');
				inputIndex += 1;
			}	
			else {
				triggers.EmitEvent('WrongTone');
				inputIndex = 0;
				Debug.Log('wrong tone');
			}
		}
	}
}