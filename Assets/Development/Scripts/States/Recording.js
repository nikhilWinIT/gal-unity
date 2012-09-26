
#pragma downcast
class Recording extends State {
	var beats : Array = new Array();
	var timeout : float = 2;
	var beatsRelative : Array = new Array();
	var timeEnabled : float;
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		timeEnabled = Time.realtimeSinceStartup;
		Reset();
	}
	
	function Update () {
		/*
		if(enabled){
			if( beats.length > 0 ){
				var waited = Time.realtimeSinceStartup - beats[beats.length - 1];
				Debug.Log(beats[0]);
				if ( (Time.realtimeSinceStartup - beats[0]) >= owner.measureLength)  {
					owner.nextState = 'Mimicking';
					
					Debug.Log(beats);
					for(var beat : float in beats) {
						beatsRelative.Push( beat - beats[0]);
					}
					Debug.Log(beatsRelative);
					
					owner.pattern = beatsRelative;
					WaitForState('Waiting', 0);
				}
			}
		}
		*/
	}
	
	function Reset() {
		beats = new Array();
		beatsRelative = new Array();
	}
	
	function HearBeat(){
		beats.Push(Time.realtimeSinceStartup);
	}
	
	function HearBeatCue() {
		owner.Nod();
	}
}