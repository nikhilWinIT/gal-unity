#pragma downcast
class Singing extends State {

	var nextBeat : int = 0;
	var patternScript : Pattern;
	var interruption : int = 0;
	var offset : float = 0;
	var started : boolean = false;	
	
	private var patternObject : GameObject;
	
	function Start () {
		
		
	}
	function OnEnable() {
		super.OnEnable();
		Reset();
		//spotlight.GetComponent(Spotlight).SetTarget('Companion');
		game.LockPlayer();
		globallight.Dim();
		spotlightPlayer.Dim();
		spotlightCompanion.Undim();
	}
	function Update () {
		super.Update();
		if (interruption > 2) {
			Fail();
			interruption = 0;
		}
		else {
			if(started) {
				CheckTime();
			}
		}
		
	}
	function HearBeatCue() {
	
	}
	function Fail() {
			owner.Tilt();
		WaitForState('Singing', 0);
	}
	
	function HearBeat() {
		interruption += 1;
	}
	
	function HearCue(diff : float) {
		offset = diff;
		if(!started) {
			Reset();
			started = true;
		}
	}
	
	function Reset() {
		nextBeat = 0;
		started = false;
		startTime = Time.realtimeSinceStartup;
	}
	
	function CheckTime () {
		var elapsed = Time.realtimeSinceStartup - startTime;
		
		if (nextBeat > owner.pattern.length-1){
			EndState();
	
		}
		
		else if( elapsed > parseFloat(pattern[nextBeat]) - offset){
			owner.PlaySoundAt(notes[nextBeat]);
			nextBeat += 1;
		}
		
	}
	function EndState() {
		ChangeState('Listening');
	}
}