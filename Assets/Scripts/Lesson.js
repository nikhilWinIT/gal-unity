class Lesson extends MonoBehaviour {
	var track : Track;
	var pattern : Pattern;
	var index : int = 0;
	private var beatLength : float;
	private var baseTime : float;
	
	function Initialize(){
		track.FadeIn(.01);
		baseTime = Time.realtimeSinceStartup;
		beatLength = 60/track.bpm;

	}
	function Stop(){
		track.FadeOut(.01);
	}
	function CheckForNote() {
		var elapsed = Time.realtimeSinceStartup - baseTime;
		if (index > pattern.rhythm.length-1){
	
		}
		else if( elapsed > beatLength * pattern.rhythm[index]){
			Debug.Log(pattern.melody[index]);
			index += 1;
		}
		
	}
}