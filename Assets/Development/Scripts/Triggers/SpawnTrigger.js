
class SpawnTrigger extends Trigger {

	var spawnObject : GameObject;
	var spawnParent: Transform;
	var container : Transform;
	
	function Pull(param : String){
		for( var target : GameObject in targets){
			var instance = Instantiate(target, spawnParent.position, spawnParent.rotation);
			instance.transform.parent = container;
		}
	}
}