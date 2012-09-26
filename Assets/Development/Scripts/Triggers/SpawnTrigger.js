
class SpawnTrigger extends Trigger {

	var spawnObject : GameObject;
	var spawnParent: Transform;
	var container : Transform;
	
	function Pull(){
		for( var target : GameObject in targets){
			Debug.Log('spawn');
			var instance = Instantiate(target, spawnParent.position, spawnParent.rotation);
			instance.transform.parent = container;
		}
	}
}