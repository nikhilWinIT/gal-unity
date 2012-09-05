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
		game.managers.keyboard.HideAll();

		//spotlight.GetComponent(Spotlight).SetTarget('Companion');
		game.LockPlayer();
		game.entities.lights.global.Dim();
		game.entities.lights.player.Dim();

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
			game.managers.music.ResetTrack();

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
			game.managers.keyboard.ShowKeys([notes[nextBeat]]);
			owner.SingAt(notes[nextBeat]);
			nextBeat += 1;
		}
		
	}
	function EndState() {
		ChangeState('Listening');
	}
}