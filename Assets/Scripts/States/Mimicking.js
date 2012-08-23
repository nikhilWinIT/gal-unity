
#pragma downcast
class Mimicking extends Singing {
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		TrimPattern();
		Debug.Log(pattern);
		
	}
	function TrimPattern() {
		if ( pattern[pattern.length-1] > owner.measureLength) {
			pattern.Pop();
		}
	}
	
	function EndState() {
		owner.SetNextState('Mimicking');
		ChangeState('Waiting');
	}
}