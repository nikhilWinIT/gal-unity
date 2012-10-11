class Lesson extends MonoBehaviour {
	var pattern : Pattern;
	var bpm : float;
	var signature : int;
	var index : int = 0;
	var repeat : int = 1;
	var checkTone : boolean = true;
	var checkRhythm : boolean = true;
	var repeats : int;
	var maxMistakes : int = 3;
	var mistakes : int = 0;
	private var repeatIndex : int;
	private var waiting : boolean = false;
	private var beatLength : float;
	private var baseTime : float;
	private var triggers : TriggerManager;
	private var offset : float = 0;
	private var inputIndex : int = 0;
	private var tries : int = 0;
	private var paused = true;
	private var pauseTime : float = 0;
	private var lessonManager : LessonManager;
	private var correct : int;
	private var missed : int;
	private var started : boolean = false;
	private var move : boolean = true;
	function Start(){
		lessonManager = GameObject.FindObjectOfType(LessonManager);	
		Pause();
	}
	
	function Initialize( _triggerManager : TriggerManager){
		triggers = _triggerManager;
		beatLength = 60/bpm;
	}
	function Restart(){
		if(!started) started = true;
		inputIndex = 0;
		mistakes = 0;
		tries = 0;
		index = 0;
		missed = 0;
		paused = false;
		baseTime = Time.realtimeSinceStartup;
			
		
	}
	function Repeat(){
		mistakes = 0;
		tries = 0;
		index = inputIndex;
		paused = false;
		baseTime = Time.realtimeSinceStartup - pattern.rhythm[index];
	}
	function Stop(){
	}
	function Pause(){
		if(!paused){
			paused = true;
			pauseTime = Time.realtimeSinceStartup;
		}	
		
	}
	function Resume(){
		if(paused){
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
			if( elapsed > beatLength * signature){
				Pause();
				//Restart();
			}
			else {
				if (index > pattern.rhythm.length-1){
			
				}
				else if( elapsed > beatLength * pattern.rhythm[index]){
					if(!waiting){
						
						triggers.EmitEvent('PlayLessonBeat', pattern.melody[index]);
						if(move){
							triggers.EmitEvent('CompanionMove', pattern.melody[index]);
						}
						if (index == 0){
							triggers.EmitEvent('LessonFirstBeat');
						}
						else if(index == 1){
							triggers.EmitEvent('LessonSecondBeat');	
						}
					}
					index += 1;
				}
			}
		}
	}
	function Register( pitch : String){
		if(started ){
			if(tries == 0){
				triggers.EmitEvent('FirstNote');
			}
			else if(tries == 1){
				triggers.EmitEvent('SecondNote');	
			}
			tries += 1;
			var correctPitch = pattern.melody[inputIndex];
			if(pitch == correctPitch){
				CorrectNote(pitch);
			}
			else {
				MissedNote(pitch);
			}
			if(pattern.length <= inputIndex){
				CheckScore();	
			}
		}
		if(paused){
			triggers.EmitEvent('VoidInput');	
		}
	}
	function CorrectNote(pitch : String){
		triggers.EmitEvent('CorrectNote', pitch);	
		mistakes = 0;
		inputIndex += 1;
	}
	function MissedNote(pitch : String){
		mistakes += 1;
		triggers.EmitEvent('MissedNote', pitch);	
		missed += 1;
		if ( mistakes >= maxMistakes){
			//triggers.EmitEvent('TooManyMistakes', pitch);	
			triggers.EmitEvent('FailedLesson');
			paused = true;
			index = inputIndex;
		}
	}
	function CheckScore(){
		move = true;
		if(missed > 0){
			triggers.EmitEvent('PartialPassLesson');	
			}	
		else{
			triggers.EmitEvent('PassedLesson');	
		}
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
		}
	}
}