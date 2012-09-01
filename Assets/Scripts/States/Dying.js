#pragma downcast
class Dying extends Dancing {
	var randomMin : float;
	var randomMax : float;
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		game.musicManager.SetTrack('Disharmony');
		owner.dying = true;
		spotlightCompanion.Dim();
		SingRandom();
		game.keyManager.ShowAll();
		
		

	}
	
	function Update () {
		super.Update();
		owner.alpha -= .001;
	}
	
	function SingAfter( seconds : float){
		yield WaitForSeconds(seconds);
		owner.Sing();
		SingRandom();
		
	}
	
	function SingRandom(){
		SingAfter(Random.Range(randomMin, randomMax));
	}
}