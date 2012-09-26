

class LevelLoader extends Trigger {
	var levelName : String;	
	function Pull(){
		Application.LoadLevel(levelName);
	}
}