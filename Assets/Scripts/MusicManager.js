class MusicManager extends MonoBehaviour {
	var track : Track;
	var startTime : float;
	var lastTime: float;
	var lastMeasure: float;
	var beat : float;
	var beatIndex: int = 0;
	var measures: int = 0;
	var beatOffset : float = 0;
	var companion : GameObject;
	var index : int = 0;
	var tracks: Array = new Array('Introduction', 'Harmony', 'Disharmony');
	var playing : boolean = false;
	var fadeRate : float = .005;
	
	function Start() {
		
	}
	
	function SetTrack(name) {
		if(track){
			track.FadeOut(fadeRate);
			}
		track = GameObject.Find(name).GetComponent(Track);
		track.FadeIn(fadeRate);
		if(!playing) playing = true;
		ResetData();
		companion.GetComponent(Character).measureLength = beat*track.signature;
		companion.GetComponent(Character).beatLength = beat;
	}
	
	function NextTrack() {
		index += 1;
		if ( index > tracks.length -1 ) index = 0;
		SetTrack(tracks[index]);
	}
	
	
	function ResetData() {
		startTime = Time.realtimeSinceStartup;
		lastTime = startTime;
		lastMeasure = startTime;
		beat = 60/track.bpm;
	}
	
	function Update() {
		if(playing){
			var diff = Time.realtimeSinceStartup - lastTime - beatOffset;
			if ( diff >= beat) {
				AddBeat();		
			}
			var measureTime = Time.realtimeSinceStartup - lastMeasure;
			var measureDiff = measureTime - (beat*track.signature);
			if (measureDiff > 0){
				companion.SendMessage('OnCue', measureDiff);
				measureTime = 0;
				lastMeasure = Time.realtimeSinceStartup;
			}
		}
	}
	
	function AddBeat() {
		SendBeatCue();
		beatIndex += 1;
		companion.GetComponent(Character).beat += 1;
		lastTime = Time.realtimeSinceStartup;
		if ( beatIndex > track.signature) {
			beatIndex = 0;
			measures += 1;
		}
	}
	
	function SendCue() {
		companion.SendMessage('OnCue');
	}
	
	function SendBeatCue() {
		companion.SendMessage('OnBeatCue');
	}
	
	
	function Reset() {
		track.audio.Stop();
		super.Reset();
		
	}

}
