#pragma downcast
class Listening extends State {
	var recordedNotes : Array = new Array();
	var lastNote : float;
	var durationHeard : float = 0;
	var normalizedPattern : Array;
	var forgivingness : float;
	var beatIndex : int;
	var pitchFailCount : int;
	var pitchFailMax : int;
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		Reset();
		game.UnlockPlayer();
		var rPattern = ConvertPatternRelative(pattern);
		normalizedPattern = NormalizePattern(rPattern);
		Debug.Log(normalizedPattern);
		spotlightPlayer.Undim();
		spotlightCompanion.Dim();
		//spotlight.GetComponent(Spotlight).SetTarget('Player');

	}
	
	function Reset() {
		recordedNotes = new Array();
		pitchMiss = 0;
		beatIndex = 0;
	}
	
	function HearBeat(index : int) {
		RecordBeat(index);
	}
	
	function RecordBeat(index : int) {
		if ( CheckPitch(index)) {
			var recordedNote : float;
			if(recordedNotes.length < 1){
				recordedNote = 0;
			}
			else {
				recordedNote = Time.realtimeSinceStartup - lastNote;
			}
			durationHeard += recordedNote;
			recordedNotes.push(recordedNote);
			if ( recordedNotes.length >= pattern.length ) {
				CheckPattern();
			}
			lastNote = Time.realtimeSinceStartup;
			beatIndex += 1;
		}
		else {
			PitchFail();
		}
	}
	
	function CheckPitch(index : int ) {
		if ( notes[beatIndex] == index ){
			return true;
		}
		else {
			return false;
		}
	}
	
	function CheckPattern() {
		owner.SetNextState('Singing');
		var nNotes = NormalizePattern(recordedNotes);
		Debug.Log('submitted: ' + nNotes);
		Debug.Log('model: ' + normalizedPattern);
		for (var i = 0; i < normalizedPattern.length; i++) {
			Debug.Log( Mathf.Abs( nNotes[i] - normalizedPattern[i]));
			if ( Mathf.Abs( nNotes[i] - normalizedPattern[i]) > forgivingness ) {
				Fail();
				return;
			}	
		}
		Success();
	}
	
	function Fail(){
		owner.Tilt();
		WaitForState('Singing', 0);
	}
	
	function PitchFail() {
		owner.Tilt();
		
		pitchFailCount += 1;
		if ( pitchFailCount > pitchFailMax ) {
			WaitForState('Singing', 0);
			pitchFailCount = 0;
		}
		else {
			WaitForState('Listening', 0);
		}
	}

	
	function Success() {
		owner.Jump();
		owner.Success();
		
		if (owner.phase == 3) {
			ChangeState('Dancing');
		}
		else {
			ChangeState('Singing');

		}
	}
	
	function Update () {
		super.Update();
		
	}
	
	function NormalizePattern(ptrn) {
		var sum : float = 0;
		var np = new Array();
		for ( var i = 0; i<ptrn.length; i++) {
			sum += ptrn[i];
		}
		Debug.Log('sum is ' + sum);
		for ( i = 0; i<ptrn.length; i++) {
			np.Push(ptrn[i]/sum);
		}
		return np;
	}
	

}