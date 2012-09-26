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
	private var pauseTime : float = 0;
	private var lessonManager : LessonManager;
	function Start(){
		lessonManager = GameObject.FindObjectOfType(LessonManager);	
	}
	
	function Initialize( _triggerManager : TriggerManager){
		triggers = _triggerManager;
		beatLength = 60/track.bpm;
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
					triggers.EmitEvent('PlayLessonBeat');
					index += 1;
				}
			}
		}
	}
	function SendInput(name : String){
		if(!paused){
		if(checkTone){
			Debug.Log(inputIndex);
			if(name == pattern.melody[inputIndex]){
				triggers.EmitEvent('CorrectTone');
				inputIndex += 1;
				if(inputIndex == pattern.length){
					inputIndex = 0;	
					triggers.EmitEvent('CorrectPattern');
					yield WaitForSeconds(lessonManager.breakDuration);
					lessonManager.Next();
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
	}
	function WaitFor( seconds : float){
		Stop();
		paused = true;
		yield WaitForSeconds(seconds);
		Restart();
		
	}
}