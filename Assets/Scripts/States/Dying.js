#pragma downcast
class Dying extends State {
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		musicManager.SetTrack('Disharmony');
	}
	
	function Update () {
		super.Update();
	}
}