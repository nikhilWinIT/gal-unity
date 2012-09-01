#pragma downcast
class Dying extends Dancing {
	var randomMin : float;
	var randomMax : float;
	function Start () {
	
	}
	
	function OnEnable() {
		super.OnEnable();
		game.managers.music.SetTrack('Disharmony');
		owner.dying = true;
		game.entities.lights.companion.Dim();
		SingRandom();
		game.managers.keyboard.ShowAll();
		
		

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