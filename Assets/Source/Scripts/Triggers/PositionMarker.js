
class PositionMarker extends Trigger {
	var target : Transform;
	var marker : Transform;
	function Pull(param : String){
		marker.position = target.position;	
	}
}