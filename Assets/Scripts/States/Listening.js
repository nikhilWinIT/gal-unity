#pragma downcast
class Listening extends State {
	var notes : Array = new Array();
	var lastNote : float;
	var durationHeard : float = 0;
	var normalizedPattern : Array;
	var forgivingness : float;
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		Reset();
		pattern = owner.pattern;
		var rPattern = ConvertPatternRelative(pattern);
		normalizedPattern = NormalizePattern(rPattern);
		Debug.Log(normalizedPattern);
		spotlightPlayer.Undim();
		spotlightCompanion.Dim();
		//spotlight.GetComponent(Spotlight).SetTarget('Player');

	}
	
	function Reset() {
		notes = new Array();
	}
	
	function HearBeat() {
		RecordBeat();
	}
	
	function RecordBeat() {
		var note : float;
		if(notes.length < 1){
			note = 0;
		}
		else {
			note = Time.realtimeSinceStartup - lastNote;
		}
		durationHeard += note;
		notes.push(note);
		if ( notes.length >= pattern.length ) {
			CheckPattern();
		}
		lastNote = Time.realtimeSinceStartup;
	}
	
	function CheckPattern() {
		owner.SetNextState('Singing');
		var nNotes = NormalizePattern(notes);
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