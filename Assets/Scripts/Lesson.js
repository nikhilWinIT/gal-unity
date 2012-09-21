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
	private var paused = true;
	
	function Initialize( _triggerManager : TriggerManager){
		triggers = _triggerManager;
		beatLength = 60/track.bpm;
		Restart();
	}
	function Restart(){
		index = 0;
		track.Stop();
		track.Play();
		paused = false;
		baseTime = Time.realtimeSinceStartup;
		
	}
	function Stop(){
		track.Stop();
	}
	function CheckForNote() {
		if(!paused){
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
	}
	function SendInput(name : String){
		if(checkTone){
			Debug.Log(inputIndex);
			if(name == pattern.melody[inputIndex]){
				triggers.EmitEvent('CorrectTone');
				inputIndex += 1;
				if(inputIndex == pattern.length){
					inputIndex = 0;	
					Debug.Log('correct pattern');
					triggers.EmitEvent('CorrectPattern');
					Debug.Log(inputIndex);
				}
			}	
			else {
				if(paused != true){
					triggers.EmitEvent('WrongTone');
					inputIndex = 0;
					WaitFor(2);
					Debug.Log('wrong tone');
				}
			}
		}
	}
	function WaitFor( seconds : float){
		Stop();
		paused = true;
		yield WaitForSeconds(seconds);
		Restart();
		
	}
}