#pragma downcast
class Dancing extends State {

	var nextBeat : int = 0;
	var patternScript : Pattern;
	var interruption : int = 0;
	var started : boolean = false;
	var offset: float  = 0;
	var repeat : int = 0;
	var repeatsPerPattern : int = 1;
	var duration : float ;
	
	
	private var patternObject : GameObject;
	
	function Start () {
		
		
	}
	function OnEnable() {
		super.OnEnable();
		Reset();
		game.managers.keyboard.HideAll();
		ChangeStateAfter( duration, 'Dying');

		
	}
	function Update () {
		if(started){
			CheckTime();
			
		}
	}
	function HearCue(diff : float) {
		offset = diff;
		if(!started){
			Reset();
			Debug.Log('start');
			started = true;
		}
	}
	
	function HearBeat() {
		interruption += 1;
	}
	
	function Reset() {
		nextBeat = 0;
		pattern = owner.pattern;
		startTime = Time.realtimeSinceStartup;
		//if( repeat > repeatsPerPattern) {
		//	repeat = 0;
		//	owner.NextPattern();
		//}
	}
	
	function CheckTime () {
		var elapsed = Time.realtimeSinceStartup - startTime;
		
		if (nextBeat > pattern.length-1){
			started = false;
			repeat += 1;
	
		}
		
		else if( elapsed > parseFloat(pattern[nextBeat]*owner.beatLength)-offset){
			owner.SingAt(notes[nextBeat]);
			nextBeat += 1;
		}
		
	}
	function EndState() {
		ChangeState('Listening');
	}
}