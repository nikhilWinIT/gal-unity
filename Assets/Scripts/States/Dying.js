#pragma downcast
class Dying extends Dancing {
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		musicManager.SetTrack('Disharmony');
		owner.dying = true;
	}
	
	function Update () {
		super.Update();
		owner.alpha -= .001;
	}
}