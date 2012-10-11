
class PositionSetter extends Trigger {
	var target : Transform;
	var destination : Transform;
	function Pull(param : String){
		target.position = destination.position;	
	}
}