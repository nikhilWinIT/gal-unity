#pragma downcast
class Dancing extends State {

	var nextBeat : int = 0;
	var patternScript : Pattern;
	var interruption : int = 0;
	var started : boolean = false;
	var offset: float  = 0;
	
	
	private var patternObject : GameObject;
	
	function Start () {
		
		
	}
	function OnEnable() {
		super.OnEnable();
		Reset();
		pattern = owner.pattern;
	}
	function Update () {
		UpdatePosition();
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
		startTime = Time.realtimeSinceStartup;
	}
	
	function CheckTime () {
		var elapsed = Time.realtimeSinceStartup - startTime;
		
		if (nextBeat > pattern.length-1){
			started = false;
	
		}
		
		else if( elapsed > parseFloat(pattern[nextBeat]*owner.beatLength)-offset){
			owner.Sing();
			nextBeat += 1;
		}
		
	}
	function EndState() {
		ChangeState('Listening');
	}
}