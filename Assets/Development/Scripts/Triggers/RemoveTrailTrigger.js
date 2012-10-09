
class RemoveTrailTrigger extends Trigger {

	var target: Transform;
	
	function Pull(param : String){
		var old = target.gameObject.GetComponentInChildren(Trail);
		if(old){
			old.Kill();
		}
	}
}