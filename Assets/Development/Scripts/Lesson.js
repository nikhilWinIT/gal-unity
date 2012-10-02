class Lesson extends MonoBehaviour {
	var track : Track;
	var pattern : Pattern;
	var index : int = 0;
	var repeat : int = 1;
	var checkTone : boolean = true;
	var checkRhythm : boolean = true;
	var repeats : int;
	private var repeatIndex : int;
	private var waiting : boolean = false;
	private var beatLength : float;
	private var baseTime : float;
	private var triggers : TriggerManager;
	private var offset : float = 0;
	private var inputIndex : int = 0;
	private var paused = true;
	private var pauseTime : float = 0;
	private var lessonManager : LessonManager;
	private var passed : boolean;
	function Start(){
		lessonManager = GameObject.FindObjectOfType(LessonManager);	
	}
	
	function Initialize( _triggerManager : TriggerManager){
		triggers = _triggerManager;
		beatLength = 60/track.bpm;
	}
	function Restart(){
		index = 0;
		if(track){
		track.Stop();
		passed = false;
		track.Play();
		}
		paused = false;
		baseTime = Time.realtimeSinceStartup;
		
	}
	function Stop(){
		track.Stop();
	}
	function Pause(){
		if(!paused){
			track.Pause();
			paused = true;
			pauseTime = Time.realtimeSinceStartup;
		}	
		
	}
	function Resume(){
		if(paused){
			track.Play();
			paused = false;
			baseTime += Time.realtimeSinceStartup - pauseTime;
		}
	
	}			
	
	function UpdateLesson(){
			CheckForNote();
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
					if(!waiting && !passed){
						
						triggers.EmitEvent('PlayLessonBeat', pattern.melody[index]);
					}
					index += 1;
				}
			}
		}
	}
	function SendInput(name : String){
		if(!paused){
		triggers.EmitEvent('AnyKey', name);
			if(checkTone){
				if(name == pattern.melody[inputIndex]){
					CorrectPitch(name);
				}	
				else {
					WrongPitch(name);			
					return;
				}
			}
			if(inputIndex == pattern.length){
				CheckPattern();
			}
		}
		else{
			triggers.EmitEvent('VoidInput', name);	
		}
	}
	function CorrectPitch(name:String){
		inputIndex += 1;
	}
	function CorrectPattern() {
		triggers.EmitEvent('CorrectPattern', name);
		repeatIndex += 1;
		inputIndex = 0;
		if(repeatIndex > repeats) {
			Stop();
			yield WaitForSeconds(lessonManager.breakDuration);
			lessonManager.Next();
		}
		else{
			inputIndex = 0;	
			passed = true;
		}
	}
	function WrongPitch(name:String){
		waiting = false;
		inputIndex = 0;
		triggers.EmitEvent('WrongPitch', name);
		inputIndex = 0;
		WaitFor(lessonManager.breakDuration);
	}
	function CheckPattern(){
	waiting = false;
		if(checkRhythm){
		}
		CorrectPattern();		
	}
	function WaitFor( seconds : float){
		Stop();
		paused = true;
		yield WaitForSeconds(seconds);
		Restart();
		
	}
}