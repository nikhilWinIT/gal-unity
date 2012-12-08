class Lesson extends MonoBehaviour {
	var pattern : Pattern;
	var bpm : float;
	var signature : int;
	var index : int = 0;
	var repeat : int = 1;
	var checkTone : boolean = true;
	var checkRhythm : boolean = true;
	var repeats : int;
	var doNotRepeat : boolean;
	var doNotRevert : boolean;
	var maxMistakes : int = 3;
	var mistakes : int = 0;
	private var ended : boolean;
	private var repeatIndex : int;
	private var waiting : boolean = false;
	private var beatLength : float;
	private var baseTime : float;
	private var triggers : TriggerManager;
	private var offset : float = 0;
	var inputIndex : int = 0;
	private var tries : int = 0;
	var paused = true;
	private var idleTime : float;
	private var pauseTime : float = 0;
	private var lessonManager : LessonManager;
	private var correct : int;
	private var missed : int;
	private var started : boolean = false;
	private var move : boolean = true;
	var triggerSuccess : TriggerGroup;
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
		Play();
		baseTime = Time.realtimeSinceStartup;
			
		
	}
	function ResetPlayer(){
		inputIndex = 0;
		mistakes = 0;
		tries = 0;
		missed = 0;
		baseTime = Time.realtimeSinceStartup;
	}
	function Repeat(){
		mistakes = 0;
		tries = 0;
		//index = inputIndex;
		Debug.Log(index);
		baseTime = Time.realtimeSinceStartup - (pattern.rhythm[index]*beatLength);
		Play();
	}
	function Stop(){
		Pause();
	}
	function Play(){
		Debug.Log('Play()');
		paused = false;	
		ended = false;
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
		if(!paused){
			CheckForNote();
			CheckIdle();
		}
	}
	function CheckForNote() {
		if(!paused){
			var elapsed = Time.realtimeSinceStartup - baseTime;
			if( elapsed > beatLength * signature){
				//Restart();
				if(!ended){
					//Debug.Log('end of turn');
					ended = true;
					triggers.EmitEvent('LessonEndOfTurn');
				}
			}
			else {
				if (index > pattern.rhythm.length-1){
			
				}
				else if( elapsed > beatLength * pattern.rhythm[index]){
					if(!waiting){
						Debug.Log(elapsed);
						
						triggers.EmitEvent('PlayLessonBeat', pattern.melody[index]);
						idleTime = Time.time;
						if(move){
							triggers.EmitEvent('CompanionMove', pattern.melody[index]);
						}
						if (index == 0){
							triggers.EmitEvent('LessonFirstBeat');
						}
						else if(index == 1){
							triggers.EmitEvent('LessonSecondBeat');	
						}
						if(index + 1 >= pattern.length){
							triggers.EmitEvent('LessonLastBeat');	
							//Debug.Log('LessonLastBeat');
						}
					}
					index += 1;
				}
			}
		}
	}
	function Register( pitch : String){
		idleTime = Time.time;
		if(started && paused == false){
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
	}
	function CorrectNote(pitch : String){
	Debug.Log(inputIndex);
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
			End('fail');
		}
	}
	function CheckScore(){
		move = true;
		if(missed > 0){
			End('partial');
		}	
		else{
			End('pass');
		}
	}
	// End all input and output processing and place Lesson instance in a safe state.
	function End( result : String){
		Stop();
		switch(result){
			case 'pass':
				Pass();
				break;
			case 'partial':
				Partial();
				break;
			case 'fail':
				Fail();
				break;	
		}
	}
	function Pass(){
		Debug.Log('pass');
		if(triggerSuccess){
			triggerSuccess.Pull();
		}
			triggers.EmitEvent('PassedLesson');	
	}
	function Partial(){
			if(doNotRevert){
				triggers.EmitEvent('PartialPassLesson');	
			}
			else{
				triggers.EmitEvent('RevertLesson');		
			}
	}
	function Fail(){
		Debug.Log('fail:'+ inputIndex);
			triggers.EmitEvent('FailedLesson');
			index = inputIndex;
	}	
	function CorrectPattern(){
		triggers.EmitEvent('CorrectPattern', name);
		repeatIndex += 1;
		inputIndex = 0;
	}
	
	function CheckIdle(){
		if ( Time.time - idleTime > 3 ) {
			End('fail');	
			idleTime = Time.time+3;
		}	
	}
}