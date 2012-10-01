

class LevelLoader extends Trigger {
	var levelName : String;	
	function Pull(param : String){
		Application.LoadLevel(levelName);
	}
}